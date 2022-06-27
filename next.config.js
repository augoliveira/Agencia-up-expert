const withSass = require('@zeit/next-sass')
const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });

        return config;
    }
}));
module.exports = {
  experimental: {
    outputStandalone: true,
  },
};
module.exports = {
  swcMinify: true,
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
  