/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "dce0qyjkutl4h.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "www.slideteam.net",
      },
    ],
  },
};

export default nextConfig;
