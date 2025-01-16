// src/components/auth/FacebookLoginButton.js

'use client';

import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { AiOutlineFacebook } from 'react-icons/ai';
import { postData } from '@/lib/axios';
import { toast } from 'react-toastify';

const FacebookLoginButton = ({ onSuccess }) => {
    const facebook_app_id = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID

    const handleFacebookLogin = async (response) => {
        // console.log('Facebook login response:', response);
        console.log('Facebook login response:', response.accessToken);

        try {
            const res = await postData('/auth/facebook', { token: response.accessToken });
            console.log('Facebook login successful:', res);

            if (res.results.token) {
                toast.success('Login successful!');
                localStorage.setItem('authToken', res.results.token);
                if (onSuccess) onSuccess(res.results.token);
            }
        } catch (error) {
            toast.error('Facebook login failed');
        }
    };

    return (
        <FacebookLogin
            appId={facebook_app_id}
            fields="name,email,picture"
            callback={handleFacebookLogin}
            cssClass="w-full flex items-center justify-center py-2 px-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none mt-2"
            icon={<AiOutlineFacebook className="mr-2" />}
            textButton="Continue with Facebook"
        />
    );
};

export default FacebookLoginButton;
