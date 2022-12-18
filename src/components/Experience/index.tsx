import { FC, useState } from 'react';
import { variants } from '../../constants/animation-constants';
import { experienceButtons, experiences } from './ExperienceCard/data';
import ExperienceCard from './ExperienceCard';
import { Button, ButtonStack, ExperienceFlexContainer, ExperienceTitle, ExperienceWrapper } from './styles';
import { Experience } from './types';

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
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.2, once: true }}
    >
      <ExperienceTitle variants={variants} custom={1}>
        <p>Where I`ve worked</p>
      </ExperienceTitle>
      <ExperienceFlexContainer
        initial='hidden'
        whileInView='enter'
        exit='exit'
        viewport={{ amount: 0.2, once: true }}
      >
        <ButtonStack
          variants={variants} custom={1}
        >
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