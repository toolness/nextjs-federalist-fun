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
  </div>
);

export default Index;
