import React, { useState } from 'react'
import { ArrowLeft, Loader, Mail } from "lucide-react";
import AuthLayout from '../../components/Layout/AuthLayout'
import { useUser } from '../../context/user.context';
import { forgotPassword } from '../../utils/authService';
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { isLoading } = useUser();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await forgotPassword(email);

            toast.success(response?.message || "Password reset link sent to your email");
            setIsSubmitted(true);
        } catch (err) {
            toast.error(err.response?.data?.message || "Error sending password reset link");
            console.error(err);
        }
    };
    return (
        <AuthLayout>
            <div className="text-base lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-black">Forgot Password</h3>
                <p className="text-xs text-slate-700 mt-[5px] mb-6">
                    Enter your email address and we'll send you a link to reset your password.
                </p>

                {!isSubmitted ? (
                    <form onSubmit={handleSubmit}>
                        <Input
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            label="Email Address"
                            placeholder="john@example.com"
                            type="text"
                            required
                        />
                        <button
                            className='btn-primary'
                            type='submit'
                        >
                            {isLoading ? <Loader className='size-6 animate-spin mx-auto' /> : "Send Reset Link"}
                        </button>
                    </form>
                ) : (
                    <div className="text-center">
                        {/* Icon container with thick border */}
                        <div
                            className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-8 border-violet-200 animate-bounce"
                        >
                            <Mail className="h-9 w-9 text-white" />
                        </div>

                        {/* Message */}
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">
                            Check Your Email
                        </h4>
                        <p className="text-sm text-slate-600 max-w-xs mx-auto">
                            If an account exists for <span className="font-medium text-violet-600">{email}</span>,
                            you will receive a password reset link shortly.
                        </p>
                    </div>
                )}
                <div className='text-[13px] py-4 bg-opacity-50 flex'>
                    <Link to={"/login"} className='font-medium text-primary hover:underline flex items-center'>
                        <ArrowLeft className='h-4 w-4 mr-2' /> Back to Login
                    </Link>
                </div>
            </div>
        </AuthLayout >
    )
}

export default ForgotPassword
