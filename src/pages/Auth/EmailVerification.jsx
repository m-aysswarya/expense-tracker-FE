import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import AuthLayout from '../../components/Layout/AuthLayout'
import { checkAuth, verifyEmail } from '../../utils/authService'

const EmailVerification = () => {
    const [code, setCode] = useState(["", "", "", "", "", ""])
    const inputRefs = useRef([])
    const navigate = useNavigate()

    // Local states (replacing Zustand states)
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Redirect if already verified
    useEffect(() => {
        const verifyStatus = async () => {
            try {
                const data = await checkAuth();
                if (data.isVerified) {
                    navigate("/dashboard");
                }
            } catch {
                navigate("/login");
            }
        };
        verifyStatus();
    }, [navigate]);

    const handleChange = (index, value) => {
        const newCode = [...code];

        // Handle pasted content
        if (value.length > 1) {
            const pastedCode = value.slice(0, 6).split("");
            for (let i = 0; i < 6; i++) {
                newCode[i] = pastedCode[i] || "";
            }
            setCode(newCode);

            // Focus on the last non-empty input or the first empty one
            const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
            const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
            inputRefs.current[focusIndex].focus();
        } else {
            newCode[index] = value;
            setCode(newCode);

            // Move focus to the next input field if value is entered
            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };
    const handleKeyDown = async (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const VerificationCode = code.join("")
        setError("");
        setIsLoading(true);
        try {
            await verifyEmail(VerificationCode); // Call service
            toast.success("Email verified successfully");
            navigate('/');
        } catch (err) {
            const errorMsg = err.response?.data?.message || "Error verifying email";
            setError(errorMsg);
            toast.error(errorMsg);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    // Auto submit when all fields are filled
    useEffect(() => {
        if (code.every((digit) => digit !== "")) {
            handleSubmit(new Event("submit"));
        }
    }, [code]);
    return (
        <AuthLayout>
            <div className="text-base lg:w-[75%] h-3/4 md:h-full flex flex-col justify-center items-center-safe">
                <h3 className="text-xl font-semibold text-black">Verify Your Email</h3>
                <p className="text-xs text-slate-700 mt-[5px] mb-6">
                    Enter the 6-digit code sent to your email address
                </p>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='flex gap-6'>
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type='text'
                                maxLength='6'
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className='w-12 h-12 text-center text-2xl font-bold text-black border-2 border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none text-sm text-black bg-slate-100 rounded px-4 py-3 mb-4 mt-3 '
                            />
                        ))}
                    </div>
                    {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
                    <button
                        type='submit'
                        disabled={isLoading || code.some((digit) => !digit)}
                        className='btn-primary'
                    >
                        {isLoading ? "Verifying..." : "Verify Email"}
                    </button>
                </form>


            </div>
        </AuthLayout>
    )
}

export default EmailVerification
