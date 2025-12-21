import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // If deploying to username.github.io/repo-name, uncomment and set:
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
};

export default withContentlayer(nextConfig);



