import { nanoid } from 'nanoid';
import { FC, useState } from 'react';
import { Title } from '../styles';
import { experienceButtons, experiences } from './data';
import ExperienceCard from './ExperienceCard';
import { Button, ButtonStack, ExperienceFlexContainer, ExperienceTitle, ExperienceWrapper } from './styles';
import { Experience } from './types';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
};

const Experience: FC = () => {
  const [showExperience, setShowExperience] = useState<string>(experienceButtons[0].experienceId);
  const [experience, setExperience] = useState<Experience | undefined>(experiences[0]);

  const handleShowExperienceCard = (id: string) => {
    if (experience) {
      switch (id) {
        case '1':
          return <ExperienceCard experience={experience} />;
        case '2':
          return <ExperienceCard experience={experience} />;
        default: return <ExperienceCard experience={experience} />;
      };
    }
  };

  const determineExperienceCard = (id: string) => {
    if (id) {
      const experience = experiences.find((item) => item.id === id);
      setExperience(experience);
      setShowExperience(id);
    };
  };

  return (
    <ExperienceWrapper
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
    >
      <ExperienceTitle><p>Where I`ve worked</p></ExperienceTitle>
      <ExperienceFlexContainer>
        <ButtonStack>
          {
            experienceButtons.map((button) => (
              <Button
                key={button.id}
                onClick={() => determineExperienceCard(button.experienceId)}
                className={button.experienceId === showExperience ? 'active' : ''}
              >
                {button.text}
              </Button>
            ))
          }
        </ButtonStack>

        {handleShowExperienceCard(showExperience)}

      </ExperienceFlexContainer>
    </ExperienceWrapper>
  );
};

export default Experience;