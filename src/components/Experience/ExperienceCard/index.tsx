import { FC } from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../../constants/animation-constants';
import { Experience } from '../types';
import { CompanyLink, ExperienceCardTitle, RangeTitle, ResponsibilityCard, ResponsibilityStack } from './styles';

type Props = {
  experience: Experience;
};

const ExperienceCard: FC<Props> = ({ experience }) => {
  return (
    <motion.div
      variants={variants}
      custom={1}
    >
      <ExperienceCardTitle>
        <span>{experience.title}</span>
        <CompanyLink href={experience.companySiteUrl} target='_blank'>{experience.company}</CompanyLink>
      </ExperienceCardTitle>
      <RangeTitle>{experience.workingDates}</RangeTitle>
      <ResponsibilityStack>
        {
          experience.responsibilities.map((responsibility) => (
            <ResponsibilityCard key={responsibility.id}>{responsibility.responsibility}</ResponsibilityCard>
          ))
        }
      </ResponsibilityStack>
    </motion.div>
  );
};

export default ExperienceCard;