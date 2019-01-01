'use strict';

module.exports = {
  plugins: ['typescript'],
  modify(config, { target, dev }, webpack) {
    const appConfig = config; // stay immutable here
    appConfig.module.rules.push({
      test: /\.(js|jsx|ts|tsx)?$/,
      loader: 'prettier-loader',
      exclude: /node_modules/
    })

    return appConfig;
  },
};