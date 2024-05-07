/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// // next.config.js
const nextConfig = {
    webpack: (config) => {
      // Handling SVG files
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
export default nextConfig;
