/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // recommandé pour Vercel
  images: {
    domains: [], // ajoute tes domaines d'images si besoin
  },
}

module.exports = nextConfig