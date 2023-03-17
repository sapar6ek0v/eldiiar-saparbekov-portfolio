import { motion } from 'framer-motion';
import styled from 'styled-components';

type SkillCardProps = {
  color: string;
};

export const FlexContainer = styled.div`
  ${({ theme }) => theme.mixins.column};
`;

export const SkillCard = styled(motion.div)`
  width: 90%;
  background-color: ${(props: SkillCardProps) => `var(${props.color})`};
  padding: 30px;
  ${({ theme }) => theme.mixins.column};
  gap: 20px;

  &:nth-child(2) {
    margin-left: auto;
  }
`;

export const GroupSkillIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

export const SkillIcon = styled(motion.div)`
  color: var(--dark-gray);
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const SkillTitle = styled.p`
  color: var(--dark-gray);
  ${({ theme }) => theme.mixins.fontSize16};
  font-weight: 600;
`;
