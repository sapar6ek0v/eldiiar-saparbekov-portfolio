import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const AboutMeWrapper = styled(motion.div)`
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
`;

export const DescriptionStack = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Description = styled(motion.p)`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: ${colors.white};
`;

export const ImageWrapper = styled(motion.div)`
  width: 100%;
`;

export const StyledImage = styled(Image)`
  --s: 15px;
  --b: 2px;
  --w: 270px;
  --h: 270px;
  --c: ${colors.blue};
  --m: left var(--_i, 0%) top var(--_f), bottom var(--_i, 0%) left var(--_f),
    top var(--_i, 0%) right var(--_f), right var(--_i, 0%) bottom var(--_f);
  --_f: 10% /45% 45% no-repeat linear-gradient(${colors.black} 0 0);
  --_g: var(--c) var(--b), ${colors.lightDark} 0 calc(100% - var(--b)), var(--c) 0;

  display: inline-block;
  border-radius: 4px;
  width: var(--w);
  height: var(--h);
  object-fit: cover;
  cursor: pointer;
  aspect-ratio: 1;
  padding: calc(2 * var(--s));
  background: linear-gradient(var(--_g)) 50%/100% var(--_i, 100%) no-repeat,
    linear-gradient(90deg, var(--_g)) 50% / var(--_i, 100%) 100% no-repeat;
  outline: calc(var(--w) / 2) solid transparent;
  outline-offset: calc(var(--w) / -2 - 2 * var(--s));
  transition: 0.4s linear;
  -webkit-mask: var(--m);
  mask: var(--m);
  filter: grayscale();

  &:hover {
    outline: var(--b) solid var(--c);
    outline-offset: calc(var(--s) / -2);
    --_i: calc(100% - 2 * var(--s));
    filter: grayscale(0);
    --_k: 10%;
  }
`;

export const TechnologyGroup = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 100px;
`;

export const TechnologyStack = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TechnologyCard = styled.li`
  position: relative;
  color: ${colors.white};
  font-size: 14px;
  padding-left: 15px;
  &::before {
    content: '▹';
    color: ${colors.blue};
    position: absolute;
    left: 0px;
  }
`;
