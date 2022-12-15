import { motion } from 'framer-motion';
import { Cursor } from 'react-simple-typewriter';
import styled from 'styled-components';

export const HeroWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 58px);
  width: 100%;
`;

export const HeroStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const JobTitle = styled.h1`
  text-transform: uppercase;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.92);
  letter-spacing: 14px;
  line-height: 20px;
  font-weight: bold;
`;

export const JobDescription = styled.h2`
  font-size: 40px;
  line-height: 20px;
  font-weight: 600;
  min-height: 45px;
  display: flex;
  align-items: center;
  background: rgb(237, 202, 133);
  background: linear-gradient(
    90deg,
    rgba(237, 202, 133, 1) 0%,
    rgba(240, 147, 176, 1) 36%,
    rgba(161, 98, 232, 1) 68%,
    rgba(160, 233, 255, 1) 98%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const JobDescCursor = styled(Cursor)`
  color: #ff63c3 !important;
  background: #ff63c3 !important;
  height: 45px;
  width: 4px;
`;
