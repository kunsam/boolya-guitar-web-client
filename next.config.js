

const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

export default withCSS(withLess(withTypescript({
  webpack(config, options) {
    return config
  }
})));