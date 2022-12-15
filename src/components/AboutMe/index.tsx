import { FC } from 'react';
import profilePhoto from '../../public/profilePhoto.jpg';
import { Title } from '../styles';
import { AboutMeWrapper, Description, DescriptionStack, Grid, ImageWrapper, StyledImage } from './styles';

const AboutMe: FC = () => {

  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  };

  return (
    <AboutMeWrapper
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.4, type: 'linear' }}
    >
      <Title>
        <p>About Me</p>
      </Title>
      <Grid>
        <DescriptionStack>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima perferendis laudantium iste dolorum. Aut odio, quisquam asperiores consequatur fuga corporis!
          </Description>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore deleniti, saepe iure blanditiis ducimus. Explicabo maxime error obcaecati quia nisi expedita reprehenderit labore optio.
          </Description>
          <Description>
            Here are technologies that I`m working
          </Description>
        </DescriptionStack>
        <ImageWrapper>
          <StyledImage
            src={profilePhoto}
            alt='profile-photo'
          />
        </ImageWrapper>
      </Grid>
    </AboutMeWrapper>
  );
};

export default AboutMe;