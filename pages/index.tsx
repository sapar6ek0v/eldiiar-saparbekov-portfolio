import { lazy, Suspense, useState, useEffect } from 'react';

import Loader from '../components/Loader';
import SEO from '../components/SEO';

const Layout = lazy(() => import('../components/Layout'));
const ProfileImage = lazy(() => import('../components/ProfileImage'));
const AdditionalInformation = lazy(() => import('../components/AdditionalInformation'));

export default function Home() {
  const [preloader, setPreload] = useState<boolean>(true);

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
      <SEO
        title="Eldiiar Saparbekov"
        description={`
          Welcome to my world of frontend development!

          Prepare to be captivated as you explore my portfolio, showcasing my skills and passion for creating stunning digital experiences. Step into a realm where creativity and innovation blend seamlessly to deliver exceptional frontend solutions.
        
          As you enter my website, you'll be greeted by a visually striking interface that reflects my unique style and attention to detail. The sleek design and thoughtfully chosen color palette create a harmonious visual experience, immediately drawing you into my world.
        
          On the homepage, I invite you to dive into my journey. A concise yet engaging introduction sets the tone for what lies ahead. Immerse yourself in a collection of meticulously curated projects and an awe-inspiring gallery that showcases my mastery of frontend development. From dynamic web designs to intuitive user interfaces, each project exemplifies my ability to transform ideas into visually stunning digital realities.
        
          Navigating through the site is an effortless experience. The intuitive menu effortlessly guides you through different sections, allowing you to explore my expertise in HTML, CSS, JavaScript, and my proficiency in popular frameworks like React and Next.js. Delve into detailed insights and explore examples of my work, providing you with a comprehensive understanding of my skills and capabilities.
        
          But I don't just want to showcase the end results. I believe in sharing the story behind each project. Through captivating case studies, I invite you to join me on the journey of creation. Gain a firsthand glimpse into my problem-solving mindset, as I tackle challenges head-on and implement innovative solutions. It's a testament to my meticulous approach and commitment to delivering top-notch frontend experiences.
        
          Connecting with me is a breeze. You'll find convenient access to my contact information, allowing potential collaborators, employers, or clients to reach out and explore exciting opportunities. Whether you have a question, a project proposal, or simply want to connect, I'm always ready to engage and discuss how we can bring your digital vision to life.
        
          Welcome to my frontend developer portfolio, where talent, creativity, and dedication converge to create unforgettable digital experiences. It's a window into my world, designed to inspire and ignite your own creative journey. Join me as we embark on a remarkable adventure in the realm of frontend development.
        `}
        name="Eldiiar Saparbekov - Frontend Developer"
        type="portfolio website"
        keywords="
          Frontend Development,
          Web Design,
          User Interface (UI),
          User Experience (UX),
          HTML,
          CSS,
          JavaScript,
          Responsive Design,
          Web Development,
          React,
          Portfolio Showcase,
          Case Studies,
          Creative Solutions,
          Innovative Designs,
          Problem-solving,
          Visual Storytelling,
          Mobile-Friendly,
          Cross-browser Compatibility,
          Clean Code,
          Collaboration,
          Client Projects,
          Professionalism,
          Attention to Detail,
          Contact Information
        "
        href='/'
      />


      <Suspense fallback={<Loader isShow={preloader} />}>
        <Layout>
          <ProfileImage />
          <AdditionalInformation />
        </Layout>
      </Suspense>
    </>
  );
};
