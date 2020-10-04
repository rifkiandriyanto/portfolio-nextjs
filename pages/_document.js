import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <link rel='shortcut icon' href='/icons/icon-72x72.png' />
          <link rel='manifest' href='/manifest.json' />
          <link
            rel='apple-touch-icon'
            sizes='192x192'
            href='/icons/icon-192x192.png'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
