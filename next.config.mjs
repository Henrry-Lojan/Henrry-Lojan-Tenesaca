/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/Henrry-Lojan-Tenesaca' : ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: isProd ? '/Henrry-Lojan-Tenesaca/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig

