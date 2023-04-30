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
  padding: clamp(1.25rem, calc(1.01rem + 1.22vw), 1.88rem);
  ${({ theme }) => theme.mixins.column};
  gap: clamp(1.13rem, calc(1.08rem + 0.24vw), 1.25rem);

  &:nth-child(2) {
    margin-left: auto;
  }
`;

export const GroupSkillIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: clamp(1.13rem, calc(1.08rem + 0.24vw), 1.25rem);
`;

export const SkillIcon = styled(motion.div)`
  color: var(--dark-gray);
  svg {
    width: clamp(1.56rem, calc(1.44rem + 0.61vw), 1.88rem);
    height: clamp(1.56rem, calc(1.44rem + 0.61vw), 1.88rem);
  }
`;

export const SkillTitle = styled.p`
  color: var(--dark-gray);
  font-size: clamp(0.88rem, calc(0.83rem + 0.24vw), 1rem);
  line-height: clamp(1.13rem, calc(1.08rem + 0.24vw), 1.25rem);
  font-weight: 600;
`;
