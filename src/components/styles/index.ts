import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LinkBtn = styled(motion.a)`
  cursor: pointer;
  font-size: var(--font-size-link-btn);
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1.2px;
  color: var(--white);
  padding: 5px 8px;
  background-color: var(--dark3);
  border: none;
  border-radius: 0 0 0 0% / 0% 0% 0% 0%;
  box-shadow: 15px 15px var(--dark-shadow);
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    outline: none;
    border-radius: 0 0 50% 50% / 0% 0% 5% 5%;
    box-shadow: 10px 10px var(--dark-shadow-hover);
    background-color: var(--yellow);
    color: var(--dark3);
  }
`;
