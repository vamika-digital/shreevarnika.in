// next.config.js
var nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};
module.exports = nextConfig;
