/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "efgtsnt47wfz",
    CONTENTFUL_ACCESS_KEY: "_zfOhzNVVZuMuEefpIOEb7yJS8QNi-oIG5oIDEw-CXc",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
