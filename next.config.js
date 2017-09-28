let webpack = require('webpack');

// https://github.com/18F/federalist-garden-build/blob/staging/build.sh#L85
const BASEURL = process.env.BASEURL || '';

module.exports = {
  assetPrefix: BASEURL,
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.BASEURL': JSON.stringify(BASEURL),
      })
    );

    return config;
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/blah': { page: '/p', query: { title: 'blah' }},
    };
  }
};
