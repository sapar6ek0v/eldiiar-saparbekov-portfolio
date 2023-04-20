import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TimeLineCard = styled(motion.div)`
  position: relative;
  max-height: 225px;
  text-align: start;
  padding: 2rem 2.2rem;
  margin-left: 1.5rem;
  background-color: var(--dark);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    z-index: 2;
  }

  &::before {
    left: 0;
    transform: translate(-50%, -50%) rotate(45deg);
    transform-origin: center center;
    width: 19px;
    height: 19px;
    background-color: inherit;
  }

  &::after {
    left: -1.5rem;
    transform: translate(-50%, -50%);
    height: 21px;
    width: 2px;
    background-color: var(--white);
  }
`;

export const TimeLineGroup = styled.div`
  ${({ theme }) => theme.mixins.apart};
  gap: 1rem;
`;

export const TimeLineCompanyLink = styled.a`
  display: inline-block;
  ${({ theme }) => theme.mixins.fontSize14};
  letter-spacing: 0;
  font-weight: 600;
  color: var(--purple);
  transition: var(--transition);

  &:is(:hover, :focus) {
    text-decoration: underline;
  }
`;

export const TimeLineDate = styled.p`
  ${({ theme }) => theme.mixins.fontSize14};
  letter-spacing: 0;
  font-weight: 600;
  color: var(--white);
  text-align: center;
`;

export const TimeLineTitle = styled.h6`
  font-size: 20px;
  line-height: 1.4em;
  letter-spacing: -0.005em;
  font-weight: 300;
  color: var(--white);
  margin: 10px 0 8px;
`;

export const HideDivGroup = styled.div`
  position: relative;
`;

export const TimeLineStack = styled.ul`
  ${({ theme }) => theme.mixins.column};
  gap: 10px;
  padding-left: 30px;
  overflow: hidden;
  height: 80px;
`;

export const ResponsibilityTitle = styled.li`
  font-size: 18px;
  line-height: 1.2em;
  letter-spacing: -0.005em;
  font-weight: 300;
  color: var(--dark-gray);
  position: relative;

  &::before {
    content: '●';
    position: absolute;
    left: -30px;
  }
`;

export const HideDiv = styled.div`
  height: 100%;
  position: absolute;
  inset: 0px;
  background: linear-gradient(transparent 24%, transparent 74%, var(--dark-shadow2) 110%);
`;

export const ExpandMoreButton = styled.button`
  position: absolute;
  right: 0;
  bottom: -26px;
  ${({ theme }) => theme.mixins.center};
  gap: 4px;
  padding: 2px 4px;
  ${({ theme }) => theme.mixins.fontSize12};
  font-weight: 400;
  color: var(--purple);
  border: 1px solid transparent;
  transition: var(--transition);

  &:is(:hover, :active, :focus, :focus-within) {
    border-color: var(--purple);
  }
`;
