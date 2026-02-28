/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  // basePath y assetPrefix solo en producción (GitHub Pages)
  // En desarrollo local (npm run dev) las rutas funcionan normalmente
  basePath: isProd ? '/Henrry-Lojan-Tenesaca' : '',
  assetPrefix: isProd ? '/Henrry-Lojan-Tenesaca/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
