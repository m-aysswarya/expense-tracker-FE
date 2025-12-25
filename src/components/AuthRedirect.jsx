import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { checkAuth } from "../utils/authService";

const AuthRedirect = () => {
    const [loading, setLoading] = useState(true);
    const [redirect, setRedirect] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const verify = async () => {
            const token = localStorage.getItem("token");

            // Case 1: No token → for login/signup, stay on page
            if (!token) {
                // If user is visiting login/signup, do NOT redirect
                if (location.pathname === "/login" ||
                    location.pathname === "/signup" ||
                    location.pathname === "/forgot-password") {
                    setRedirect(null); // allow rendering
                } else {
                    setRedirect("/login");
                }
                setLoading(false);
                return;
            }

            // Case 2: Token present → verify user
            try {
                const data = await checkAuth();
                console.log("Check-auth response:", data);

                if (data.isVerified === true) {
                    setRedirect("/dashboard");
                } else {
                    setRedirect("/verify-email");
                }
            } catch {
                // Invalid token → send to login
                setRedirect("/login");
            } finally {
                setLoading(false);
            }
        };

        verify();
    }, [location.pathname]);

    if (loading) return <div>Loading...</div>;

    // If redirect is null, allow login/signup page to render
    return redirect ? <Navigate to={redirect} /> : null;
};

export default AuthRedirect;
