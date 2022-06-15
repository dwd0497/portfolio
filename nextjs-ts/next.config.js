const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['courses-top.ru']
  },
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      issuer: /\.[jt]sx$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{
            name: 'preset-default',
            params: {
              override: {
                removeViewBox: false,
              }
            }
          }]
        },
        titleProp: true,
      },
      test: /\.svg$/
    });

    return config;
  }
};
