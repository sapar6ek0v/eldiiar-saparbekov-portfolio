import Head from 'next/head';
import { FC } from 'react';

interface Props {
  title: string;
  description: string;
  name: string;
  type: string;
  keywords: string;
  href: string;
}

const SEO: FC<Props> = ({ title, description, name, type, keywords, href }) => {
  return (
    <Head>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="google-site-verification" content="RaMy2C81mDtN68q8CBPGJKrePdeSmYRKbvfUXzPgKL4" />
      <meta name="description" content={description} data-rh="true" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={name} />
      <meta name="theme-color" content=" #212121" />
      <meta name="robots" content="index, follow" />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
      <link rel="canonical" href={href} />
      <link rel='icon' href='/logo.png' />
    </Head>
  );
};

export default SEO;