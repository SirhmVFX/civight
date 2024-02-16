/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'firebasestorage.googleapis.com',
                // Optionally, you can include protocol if necessary
                // protocol: 'https'
            }
        ],
    },
};

export default nextConfig;
