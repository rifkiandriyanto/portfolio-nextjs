import '../styles/globals.scss'
import Head from 'next/head';

const APP_NAME = 'next-pwa example';
const APP_DESCRIPTION = 'This is an example of using next-pwa plugin';

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'Next.js-hydration':
      // handle hydration results
      break;
    case 'Next.js-route-change-to-render':
      // handle route-change to render results
      break;
    case 'Next.js-render':
      // handle render results
      break;
    default:
      break;
  }
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='application-name' content={APP_NAME} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content={APP_NAME} />
        <meta name='description' content={APP_DESCRIPTION} />
        <meta name='format-detection' content='telephone=yes' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#FFFFFF' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        />
        <meta name='keywords' content='Keywords' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
