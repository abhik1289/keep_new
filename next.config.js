/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_USERNAME: "",
    MONGO_PASSWORD: "",
  }
}

module.exports = nextConfig
