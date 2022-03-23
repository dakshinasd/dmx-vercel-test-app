import { Html, Head, Main, NextScript } from 'next/document';

const tenant = 'immensa';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className={`tenant-${tenant}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
