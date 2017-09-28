const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const config = require('./next.config');
const pathMap = config.exportPathMap();

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname in pathMap) {
      const target = pathMap[pathname];
      app.render(req, res, target.page, target.query || query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
