import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeaderFixedContainer = styled(motion.header)`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 4;
  background: transparent;
`;

export const HeaderContainer = styled.nav`
  width: min(90%, 1140px);
  margin-inline: auto;
  padding: 20px var(--container-padding);
  ${({ theme }) => theme.mixins.apart};
  gap: 20px;
`;

export const HeaderGroup = styled(motion.ul)`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const HeaderButton = styled.button`
  width: 40px;
  height: 35px;
  background: none;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 2px 7px;
  ${({ theme }) => theme.mixins.fCenter};
  ${({ theme }) => theme.mixins.fontSize16};
  color: var(--dark-gray);
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    outline: none;
    border-color: var(--yellow);
    color: var(--yellow);
  }

  a {
    font-size: 20px;
  }
`;
