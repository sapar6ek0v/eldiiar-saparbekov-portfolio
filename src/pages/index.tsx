import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import { Container } from '../components/styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eldiiar Saparbekov</title>
        <meta name="description" content="About Eldiiar Saparbekov work experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container id='hero'>
          <Hero />
        </Container>
        <Container id='about'>
          <AboutMe />
        </Container>
        <Container id='experience'>
          <Experience />
        </Container>
        <section id='projects'>
          <Projects />
        </section>
        <Footer />
      </Layout>
    </>
  );
};
