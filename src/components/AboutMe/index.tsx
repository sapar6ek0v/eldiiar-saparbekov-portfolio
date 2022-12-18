import { nanoid } from 'nanoid';
import { FC } from 'react';
import { variants } from '../../constants/animation-constants';
import profilePhoto from '../../public/profilePhoto.jpg';
import { Title } from '../styles';
import {
  AboutMeWrapper,
  Description,
  DescriptionStack,
  Grid,
  ImageWrapper,
  StyledImage,
  TechnologyCard,
  TechnologyGroup,
  TechnologyStack
} from './styles';

const AboutMe: FC = () => {
  const technologies = ['JS(es6+)', 'React', 'TS', 'Next.js', 'Node.js', 'MongoDb', 'supabase', 'trpc', 'prisma'];

  return (
    <AboutMeWrapper
      initial='hidden'
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.6, once: true }}
    >
      <Title variants={variants} custom={1}>
        <p>About Me</p>
      </Title>
      <Grid>
        <DescriptionStack
          initial='hidden'
          whileInView='enter'
          exit='exit'
          viewport={{ amount: 0.5, once: true }}
        >
          <Description variants={variants} custom={1.2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima perferendis laudantium iste dolorum. Aut odio, quisquam asperiores consequatur fuga corporis!
          </Description>
          <Description variants={variants} custom={1.3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore deleniti, saepe iure blanditiis ducimus. Explicabo maxime error obcaecati quia nisi expedita reprehenderit labore optio.
          </Description>
          <Description variants={variants} custom={1.4}>
            Here are some technologies that I often use
          </Description>
          <TechnologyGroup variants={variants} custom={1.5}>
            <TechnologyStack>
              {
                technologies
                  .slice(0, 3)
                  .map((technology) => <TechnologyCard key={nanoid(4)}>{technology}</TechnologyCard>)
              }
            </TechnologyStack>
            <TechnologyStack>
              {
                technologies
                  .slice(3, 6)
                  .map((technology) => <TechnologyCard key={nanoid(4)}>{technology}</TechnologyCard>)
              }
            </TechnologyStack>
            <TechnologyStack>
              {
                technologies
                  .slice(6)
                  .map((technology) => <TechnologyCard key={nanoid(4)}>{technology}</TechnologyCard>)
              }
            </TechnologyStack>
          </TechnologyGroup>
        </DescriptionStack>
        <ImageWrapper variants={variants} custom={1.2}>
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