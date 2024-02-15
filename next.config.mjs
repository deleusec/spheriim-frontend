/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'storage.letudiant.fr',
      'upload.wikimedia.org',
    ],
  },
}

export default nextConfig
