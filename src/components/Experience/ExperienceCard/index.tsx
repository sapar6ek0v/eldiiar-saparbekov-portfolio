import { FC } from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';
import { CompanyLink, ExperienceCardTitle, RangeTitle, ResponsibilityCard, ResponsibilityStack } from './styles';

type Props = {
  experience: Experience;
};

const ExperienceCard: FC<Props> = ({ experience }) => {
  return (
    <motion.div
      initial={{ x: 500, scale: 0.5, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <ExperienceCardTitle>
        <span>{experience.title}</span>
        <CompanyLink>{experience.company}</CompanyLink>
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