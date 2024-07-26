import { Fragment } from 'react';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li><Link href="/news/nextjs-great">NextJS is a great framework</Link></li>
        <li><Link href="/news/something-else">Something else</Link></li>
      </ul>
    </Fragment>
  );
}