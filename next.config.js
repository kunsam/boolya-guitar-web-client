

const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

module.exports = withCSS(withSass(withTypescript({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    })    
    return config
  }
})));