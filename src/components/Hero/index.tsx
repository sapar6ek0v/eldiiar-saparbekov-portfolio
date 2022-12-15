import { FC } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { HeroStack, HeroWrapper, JobDescCursor, JobDescription, JobTitle } from './styles';

const Hero: FC = () => {
  const [text, count] = useTypewriter({
    words: ['Hi, I`m Eldiiar', 'Currently, I`m looking for a job'],
    loop: true,
    delaySpeed: 400,
  });

  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  };

  return (
    <HeroWrapper
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
    >
      <HeroStack>
        <JobTitle>Frontend Developer</JobTitle>
        <JobDescription>
          <span>{text}</span>
          <JobDescCursor cursorColor='red' />
        </JobDescription>
      </HeroStack>
    </HeroWrapper>
  );
};

export default Hero;