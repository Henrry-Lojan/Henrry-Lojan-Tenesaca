/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Henrry-Lojan-Tenesaca',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
