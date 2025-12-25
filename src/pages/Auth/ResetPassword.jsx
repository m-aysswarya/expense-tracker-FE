import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useUser } from '../../context/user.context'
import AuthLayout from '../../components/Layout/AuthLayout'
import Input from '../../components/Inputs/Input'
import { useNavigate, useParams } from 'react-router-dom'
import { resetPassword } from '../../utils/authService'

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false); // separate loading state

    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            setLoading(true);
            await resetPassword(token, password);

            toast.success("Password reset successfully. Redirecting to login...");
            setTimeout(() => navigate("/login"), 2000);
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Error resetting password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <AuthLayout>
                <div className="text-base lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-black">Reset Password</h3>
                    <p className="text-xs text-slate-700 mt-[5px] mb-6">
                        Enter a new password below to regain access to your account.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <Input
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            label="New Password"
                            placeholder="Enter your new password"
                            type="password"
                            required
                        />

                        <Input
                            value={confirmPassword}
                            onChange={({ target }) => setConfirmPassword(target.value)}
                            label="Confirm New Password"
                            placeholder="Re-enter your new password"
                            type="password"
                            required
                        />

                        <button
                            className="btn-primary"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Resetting..." : "Set New Password"}
                        </button>
                    </form>
                </div>
            </AuthLayout>
        </div>
    );
};

export default ResetPassword
