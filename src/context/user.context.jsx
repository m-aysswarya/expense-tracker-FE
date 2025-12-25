import { createContext, useState, useContext } from "react";
import * as authService from "../utils/authService";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Helper functions
    const updateUser = (userData) => {
        setUser(userData);
        setIsAuthenticated(!!userData);
    };

    const clearUser = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    const verifyEmail = async (code) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await authService.verifyEmail(code);
            updateUser(data.user);
        } catch (err) {
            setError(err.response?.data?.message || "Verification failed");
        } finally {
            setIsLoading(false);
        }
    };

    const checkAuth = async () => {
        setIsLoading(true);
        try {
            const data = await authService.checkAuth();
            updateUser(data.user);
        } catch {
            clearUser();
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <UserContext.Provider
            value={{
                user,
                isAuthenticated,
                isLoading,
                error,
                verifyEmail,
                checkAuth,
                updateUser,
                clearUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
