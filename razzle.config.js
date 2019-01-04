'use strict';

const path = require('path');
const babelEnvDeps = require('webpack-babel-env-deps');

module.exports = {
  plugins: ['typescript'],
  modify(config, { target, dev }, webpack) {
    const appConfig = config;
    if (target === 'web') {
      appConfig.module.rules = [
        ...appConfig.module.rules,
        {
          test: /\.(js|jsx)$/,
          loader: 'ts-loader',
          exclude: [
            babelEnvDeps.exclude()
          ],
          options: {
            transpileOnly: true
          }
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          loader: 'ts-loader',
          include: [
            path.resolve(__dirname, 'api'),
            path.resolve(__dirname, 'workplace-core'),
            path.resolve(__dirname, 'umbraco-headless'),
            path.resolve(__dirname, 'news'),
            path.resolve(__dirname, 'workplace-styles'),
          ],
          options: {
            transpileOnly: true
          }
        }
      ]
    }
    appConfig.module.rules = [
      ...appConfig.module.rules,
      {
        test: /\.(js|jsx|ts|tsx|css|scss)$/,
        loader: 'prettier-loader',
        exclude: /node_modules/,
      }
    ]
    return appConfig;
  },
};