const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  swcMinify: true,
};
module.exports = {
  experimental: {
    outputStandalone: true,
  },
};
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  };
  module.exports = {
    experimental: {
      nextScriptWorkers: true,
    },
  }
  module.exports = {
    optimizeFonts: false,
  }
  module.exports = {
    compress: false,
  }
  module.exports = {
    compiler: {
      relay: {
        // This should match relay.config.js
        src: './',
        artifactDirectory: './__generated__',
        language: 'typescript',
      },
    },
  }
  const withPWA = require('next-pwa')
 
  module.exports = withPWA({
    pwa: {
      dest: 'public',
      register: true,
      scope: '/app',
      sw: 'service-worker.js',
      //...
    }
  })
  