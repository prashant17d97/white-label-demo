/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        '@white-label/ui-components',
        '@white-label/theme',
        '@white-label/styling',
        '@white-label/typography',
        '@white-label/iconography',
    ],
};

module.exports = nextConfig;
