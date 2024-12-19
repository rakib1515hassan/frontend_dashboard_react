/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
    reactStrictMode: true, // Enables React's Strict Mode
    images: {
        domains: ['example.com'], // Allow external images from 'example.com'
    },
    // Webpack customizations
    webpack: (config, { isServer }) => {
        // Avoid applying Webpack config for Turbopack
        if (!isServer && process.env.NEXT_RUNTIME !== 'edge') {
            config.resolve.alias = {
                ...(config.resolve.alias || {}),
                lib: path.resolve('./src/lib'),
                axios: path.resolve('./node_modules/axios'),
            };
        }
        return config;
    },
};

export default nextConfig;
