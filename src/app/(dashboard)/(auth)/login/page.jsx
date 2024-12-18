import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Welcome Back</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please log in to your account
        </p>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="currentColor"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.9 0 6.5 1.7 8 3.1l5.8-5.6C33.7 3.8 29.4 2 24 2 14.8 2 7 8.5 4.6 17h7.6c1.6-4.3 6-7.5 11.8-7.5z"
              />
              <path
                fill="#4285F4"
                d="M46.5 24.3c0-1.4-.1-2.7-.3-4H24v8.3h12.7c-.5 2.7-2 5-4.3 6.6l6.8 5.3c4.1-3.8 7.3-9.7 7.3-16.2z"
              />
              <path
                fill="#FBBC05"
                d="M13.2 28.6c-.4-1.2-.6-2.5-.6-3.6s.2-2.5.6-3.6H5.6C4.6 23.8 4 25.8 4 28c0 2.2.6 4.2 1.6 5.9l7.6-5.3z"
              />
              <path
                fill="#34A853"
                d="M24 44c5.6 0 10.3-1.8 13.7-4.9L30.9 34c-1.8 1.2-4.2 1.9-6.9 1.9-5.8 0-10.6-3.6-12.3-8.7l-7.6 5.3C7 39.5 14.8 46 24 46z"
              />
              <path fill="none" d="M0 0h48v48H0z" />
            </svg>
            Continue with Google
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center py-2 px-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V10.47h3.128V8.205c0-3.1 1.892-4.788 4.657-4.788 1.325 0 2.464.099 2.795.143v3.244l-1.917.001c-1.504 0-1.796.714-1.796 1.762v2.31h3.59l-.467 4.236h-3.123V24h6.116c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z"
              />
            </svg>
            Continue with Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="example@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg focus:ring focus:ring-blue-300 focus:outline-none"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
