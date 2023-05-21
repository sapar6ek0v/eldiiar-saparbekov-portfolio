import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TimeLineCard = styled(motion.div)`
  position: relative;
  max-height: 225px;
  text-align: start;
  padding: clamp(1.25rem, calc(1.05rem + 0.98vw), 2rem) clamp(1.38rem, calc(0.98rem + 1.95vw), 2.2rem);
  margin-left: clamp(1.19rem, calc(1.07rem + 0.61vw), 1.5rem);
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
    /* left: -1.5rem; */
    transform: translate(-50%, -50%);
    height: 21px;
    width: 2px;
    background-color: var(--white);

    @media ${({ theme }) => theme.bp.bpTinyS} {
      left: -1.3rem;
    }
  }
`;

export const TimeLineGroup = styled.div`
  ${({ theme }) => theme.mixins.apart};
  gap: 1rem;
`;

export const TimeLineCompanyLink = styled.a`
  display: inline-block;
  ${({ theme }) => theme.mixins.fontSize16};
  letter-spacing: 0;
  font-weight: 600;
  color: var(--purple);
  transition: var(--transition);

  &:is(:hover, :focus) {
    text-decoration: underline;
  }
`;

export const TimeLineDate = styled.p`
  ${({ theme }) => theme.mixins.fontSize16};
  letter-spacing: 0;
  font-weight: 600;
  color: var(--white);
  text-align: center;
`;

export const TimeLineTitle = styled.h6`
  ${({ theme }) => theme.mixins.fontSize20};
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
  padding-left: clamp(0.81rem, calc(0.4rem + 2.07vw), 1.88rem);
  overflow: hidden;
  height: 80px;
`;

export const ResponsibilityTitle = styled.li`
  ${({ theme }) => theme.mixins.fontSize18};
  letter-spacing: -0.005em;
  font-weight: 300;
  color: var(--dark-gray);
  position: relative;

  &::before {
    content: '●';
    position: absolute;
    left: clamp(-1.87rem, calc(-0.4rem + -2.07vw), -0.81rem);
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
  bottom: clamp(-1.62rem, calc(-1.07rem + -0.78vw), -1.22rem);
  ${({ theme }) => theme.mixins.center};
  gap: 4px;
  padding: clamp(0.06rem, calc(0.04rem + 0.12vw), 0.13rem) 4px;
  ${({ theme }) => theme.mixins.fontSize12};
  font-weight: 400;
  color: var(--purple);
  border: 1px solid transparent;
  transition: var(--transition);

  &:is(:hover, :active, :focus, :focus-within) {
    border-color: var(--purple);
  }
`;
