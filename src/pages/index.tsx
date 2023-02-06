import Head from 'next/head';

import Layout from '../components/Layout';
import AdditionalInformation from '../components/AdditionalInformation';
import ProfileImage from '../components/ProfileImage';
import SmoothScroll from '../components/SmoothScroll';

export default function Home() {

  return (
    <>
      <Head>
        <title>Eldiiar Saparbekov</title>
        <meta name='description' content='Eldiiar Saparbekov personal website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <SmoothScroll> */}
      <Layout>
        <ProfileImage />
        <AdditionalInformation />
      </Layout>
      {/* </SmoothScroll> */}
    </>
  );
};
