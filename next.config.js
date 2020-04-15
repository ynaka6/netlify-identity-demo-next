const path = require("path");

module.exports = {
    webpack: config => {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      });
      config.resolve.alias = {
        ...config.resolve.alias,
        "~": path.resolve(__dirname, "./src")
      };
      return config;
    },
    exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
      return {
        '/': { page: '/' }
      }
    },
};
