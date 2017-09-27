This is a proof-of-concept for deploying static [next.js][] sites on
[Federalist][].

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

[next.js]: https://github.com/zeit/next.js/
[Federalist]: https://federalist.18f.gov
[Hugo]: http://gohugo.io/
[hack]: https://github.com/zeit/next.js/issues/257#issuecomment-320489250
