import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  ${({ theme }) => theme.mixins.fCenter};
  height: 66vh;
`;
export const ImageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
