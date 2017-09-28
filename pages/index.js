import Link from 'next/link';

function path(p) {
  return (process.env.BASEURL || '') + p;
}

const Index = () => (
  <div>
    <Link href={path('/about')}>
      <a style={{ fontSize: 20 }}>About Page</a>
    </Link>
    <p>Hello Next.js yoooo {path('/about')}</p>
    <Link href={path('/p?title=blah')} as={path("/p/blah")}>
      <a>Sample post</a>
    </Link>
    <img src={path('/static/wds-home-new-2x.png')}/>
  </div>
);

export default Index;
