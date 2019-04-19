

const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

module.exports = withCSS(withLess(withTypescript({
  webpack(config, options) {
    return config
  }
})));