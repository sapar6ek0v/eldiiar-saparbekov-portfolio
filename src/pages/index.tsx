import Head from 'next/head';
import { lazy, Suspense, useState, useEffect } from 'react';

import Loader from '../components/Loader';

const Layout = lazy(() => import('../components/Layout'));
const ProfileImage = lazy(() => import('../components/ProfileImage'));
const AdditionalInformation = lazy(() => import('../components/AdditionalInformation'));

export default function Home() {
  const [preloader, setPreload] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreload(false)
    }, 2000);

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Eldiiar Saparbekov</title>
        <meta name='description' content='Eldiiar Saparbekov personal website' />
        <link rel='icon' href='/logo.png' />
      </Head>

      <Suspense fallback={<Loader />} >
        {
          preloader ?
            <Loader isShow={preloader} /> :
            <Layout>
              <ProfileImage />
              <AdditionalInformation />
            </Layout>
        }
      </Suspense>
    </>
  );
};
