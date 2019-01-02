'use strict';

const babelEnvDeps = require('webpack-babel-env-deps');

module.exports = {
  plugins: ['typescript'],
  modify(config, { target, dev }, webpack) {
    const appConfig = config;
    appConfig.module.rules.push({
      test: /\.(js|jsx|ts|tsx)?$/,
      loader: 'prettier-loader',
      exclude: /node_modules/
    })
    if (target === 'web') {
      appConfig.module.rules.push({
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: [
          babelEnvDeps.exclude()
        ],
        options: {
          babelrc: false,
          presets: [
            [
              'env',
              {
                "modules": "commonjs",
                "targets": {
                  "browsers": ["last 2 versions", "ie >= 11"]
                }
              }
            ]
          ],
          plugins: [
            "transform-es2015-arrow-functions",
          ]
        }
      })
    }
    return appConfig;
  },
};