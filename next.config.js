/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "ru", "uz"],
    defaultLocale: "en"
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
    ],
  }
}

module.exports = nextConfig
