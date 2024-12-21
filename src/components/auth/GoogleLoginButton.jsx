// src/components/auth/GoogleLoginButton.js
'use client';

import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { postData } from '@/lib/axios';
import { toast } from 'react-toastify';

const GoogleLoginButton = ({ onSuccess }) => {
    const handleGoogleLoginSuccess = async (response) => {
        const { credential } = response;

        try {
            const res = await postData('/auth/google', { token: credential });
            console.log('Google login successful:', res);

            if (res.results.token) {
                toast.success('Login successful!');
                localStorage.setItem('authToken', res.results.token);
                if (onSuccess) onSuccess(res.results.token);
            }
        } catch (error) {
            toast.error('Google login failed');
        }
    };

    const handleGoogleLoginFailure = (error) => {
        toast.error('Google login failed: ' + error);
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
                useOneTap
                text="continue_with"
                theme="outline"
                size="large"
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;
