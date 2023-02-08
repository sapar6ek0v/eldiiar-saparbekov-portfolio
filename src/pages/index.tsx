import Head from 'next/head';
import { ComponentType, lazy, Suspense } from 'react';

import Loader from '../components/Loader';

export const lazyMinLoadTime = <T extends ComponentType<any>>(factory: () => Promise<{ default: T }>, minLoadTimeMs = 100) =>
  lazy(() =>
    Promise.all([factory(), new Promise((resolve) => setTimeout(resolve, minLoadTimeMs))]).then(([moduleExports]) => moduleExports)
  );

// const Layout = lazyMinLoadTime(() => import('../components/Layout'), 100);
// const ProfileImage = lazyMinLoadTime(() => import('../components/ProfileImage'), 100);
// const AdditionalInformation = lazyMinLoadTime(() => import('../components/AdditionalInformation'), 100);

const Layout = lazy(() => {
  return Promise.all([
    import("../components/Layout"),
    new Promise(resolve => setTimeout(resolve, 600))
  ])
    .then(([moduleExports]) => moduleExports);
});

const AdditionalInformation = lazy(() => {
  return Promise.all([
    import("../components/AdditionalInformation"),
    new Promise(resolve => setTimeout(resolve, 600))
  ])
    .then(([moduleExports]) => moduleExports);
});

const ProfileImage = lazy(() => {
  return Promise.all([
    import("../components/ProfileImage"),
    new Promise(resolve => setTimeout(resolve, 600))
  ])
    .then(([moduleExports]) => moduleExports);
});

export default function Home() {

  return (
    <>
      <Head>
        <title>Eldiiar Saparbekov</title>
        <meta name='description' content='Eldiiar Saparbekov personal website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Suspense fallback={<Loader />} >
        <Layout>
          <ProfileImage />
          <AdditionalInformation />
        </Layout>
      </Suspense>
    </>
  );
};
