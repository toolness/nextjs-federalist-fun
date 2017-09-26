import Link from 'next/link';
import { path } from '../next.config.js';

const Index = () => (
  <div>
    <Link href="/about">
      <button style={{ fontSize: 20 }}>About Page</button>
    </Link>
    <p>Hello Next.js {path('/about')}</p>
  </div>
);

export default Index;
