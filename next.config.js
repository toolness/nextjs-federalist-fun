module.exports = {
  // https://github.com/18F/federalist-garden-build/blob/staging/build.sh#L85
  assetPrefix: process.env.BASEURL || '/',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };
  }
};
