This is a proof-of-concept for deploying static [next.js][] sites on
[Federalist][].

## Rationale

### Making evolution easy

At 18F, many projects start out as static sites, but frequently
evolve into requiring some dynamic functionality. Traditional
static site generators like Jekyll and Hugo aren't built to support
this very well--particularly not for projects that want to follow
a progressive enhancement philosophy that requires the dynamic rendering
of HTML on the server-side.

On the other hand, next.js is a framework that supports the rendering
of dynamic content on the back-end *as well as* generating a static
export of a site. This means that we can still have the benefits of
static sites, yet still have the freedom to migrate to a dynamic
backend if needed.

### Making development faster

Because next.js works both as a static site generator *and* a server that
dynamically generates a page's content on a per-request basis, it means
that we can use its dynamic functionality during development and its
static generation capabilities for deployment.

In contrast, because pure static site generators like Jekyll and Hugo
don't support on-demand dynamic page rendering, medium-to-large sites
frequently suffer from many development inconveniences; for example, editing
a single line of HTML in a base template could trigger the regeneration of
hundreds of pages, requiring developers to wait dozens of seconds to see
the effects of their changes. With next.js, however, this isn't an issue.

## Quick start

```
npm install
npm run dev
```

Then visit http://localhost:3000/ in a browser.

## Deployment

To deploy the site on Federalist, you need to point Federalist at this
repository and tell it that the site uses [Hugo][].

It *doesn't* use Hugo, of course; the project's `npm run federalist` task
is what does all the work, but we have to tell Federalist that we're using
*something* in order for things to work. And because Federalist runs
Hugo, we need a basic Hugo setup in order for that to succeed--hence the
existence of `config.toml` and the empty `content` directory.

## Other notes

At the time of writing this, next.js doesn't support mounting statically
exported sites at a non-root location. This is required for Federalist
branch builds, though, so we're currently using a [hack][] to work
around it.

Currently, our implementation of the hack works by relying on the
`BASEURL` environment variable to be set to a prefix like
`/foo/bar`. This is automatically set by Federalist when it runs a
branch build, but you can also set this environment variable locally and
then run `npm run federalist` if you'd like to simulate Federalist
branch builds on your own system.

Note also that all links in generated pages need to be prefixed with
the `BASEURL` environment variable, or else they will point to the
wrong place on Federalist branch builds. See the source code in
the `pages` directory for examples.

[next.js]: https://github.com/zeit/next.js/
[Federalist]: https://federalist.18f.gov
[Hugo]: http://gohugo.io/
[hack]: https://github.com/zeit/next.js/issues/257#issuecomment-320489250
