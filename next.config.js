const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};
module.exports = {
  swcMinify: true,
};
module.exports = {
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
};
const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');

module.exports = withCss(withPurgeCss());
module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ['html', 'body'],
      },
    ],
  ],
};
