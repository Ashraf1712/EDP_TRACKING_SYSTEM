/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.SERVER_URL + "/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
