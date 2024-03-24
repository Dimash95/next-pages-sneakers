/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["masterpiecer-images.s3.yandex.net", "img.freepik.com"],
  },
};

export default nextConfig;
