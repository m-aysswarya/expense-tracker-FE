import axiosInstance from "./axiosInstance";
import { API_PATHS } from "./apiPaths";

// Verify Email
export const verifyEmail = async (code) => {
    const response = await axiosInstance.post(API_PATHS.AUTH.VERIFY_EMAIL, { code });
    return response.data; // contains user or success message
};

// Check Auth
export const checkAuth = async () => {
    console.log("checkAuth function called");
    const response = await axiosInstance.get(API_PATHS.AUTH.CHECK_AUTH);
    return response.data; // should include user details
};

// Forgot Password
export const forgotPassword = async (email) => {
    const response = await axiosInstance.post(API_PATHS.AUTH.FORGOT_PASSWORD, { email });
    return response.data; // contains message
};

// Reset Password
export const resetPassword = async (token, password) => {
    const response = await axiosInstance.post(`${API_PATHS.AUTH.RESET_PASSWORD}/${token}`, { password });
    return response.data; // contains message
};
