

import withCSS from '@zeit/next-css';
import withLess from '@zeit/next-sass';
import withTypescript from '@zeit/next-typescript';

export default withCSS(withLess(withTypescript({
  webpack(config, options) {
    return config
  }
})));