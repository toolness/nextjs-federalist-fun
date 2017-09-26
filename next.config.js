let pathModule = require('path');
const BASEURL = process.env.BASEURL || '/';

if (pathModule.posix) pathModule = pathModule.posix;

const path = p => pathModule.join(BASEURL, p);

module.exports = {
  // https://github.com/18F/federalist-garden-build/blob/staging/build.sh#L85
  path,
  assetPrefix: BASEURL,
  exportPathMap: function () {
    return {
      [path('/')]: { page: '/' },
      [path('/about')]: { page: '/about' },
    };
  }
};
