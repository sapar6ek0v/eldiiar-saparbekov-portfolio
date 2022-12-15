import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

export const AboutMeWrapper = styled(motion.div)`
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
`;

export const DescriptionStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.92);
`;

export const ImageWrapper = styled.div`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: block;
  position: relative;
  width: 100%;
  border-radius: 4px;
  background-color: #64ffda;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &::before {
    top: 0px;
    left: 0px;
    background-color: var(--navy);
    mix-blend-mode: screen;
  }

  &::after {
    border: 2px solid var(--green);
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

export const StyledImage = styled(Image)`
  position: relative;
  display: inline-block;
  border-radius: 4px;
  width: 200px;
  height: 200px;
  object-fit: cover;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  /* &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &::before {
    background-color: #64ffda;
  } */
`;
