import { FC } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { variants } from '../../constants/animation-constants';
import { colors } from '../../constants/colors';
import { HeroStack, HeroWrapper, JobDescription, JobTitle, JobDescFlexContainer, CursorWrapper } from './styles';

const Hero: FC = () => {
  const [text] = useTypewriter({
    words: ['Hi, I`m Eldiiar', '<I`m really fond of Frontend Development />'],
    loop: true,
    delaySpeed: 400,
    typeSpeed: 200,
  });


  return (
    <HeroWrapper
      initial='hidden'
      animate='enter'
      exit='exit'
    >
      <HeroStack>
        <JobTitle variants={variants} custom={1}>Frontend Developer</JobTitle>
        <JobDescFlexContainer variants={variants} custom={1.1}>
          <JobDescription>{text}</JobDescription>
          <CursorWrapper>
            <Cursor cursorColor={colors.blue} cursorBlinking cursorStyle='|' />
          </CursorWrapper>
        </JobDescFlexContainer>
      </HeroStack>
    </HeroWrapper>
  );
};

export default Hero;