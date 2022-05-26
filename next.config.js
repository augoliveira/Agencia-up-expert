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
  