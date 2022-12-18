import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

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

export const JobTitle = styled(motion.h1)`
  text-transform: uppercase;
  font-size: 16px;
  color: ${colors.white};
  letter-spacing: 14px;
  line-height: 20px;
  font-weight: bold;
`;

export const JobDescFlexContainer = styled(motion.div)`
  min-height: 45px;
  display: flex;
  align-items: center;
`;

export const JobDescription = styled.h2`
  font-size: 40px;
  line-height: 20px;
  font-weight: 600;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.orange};
  background: linear-gradient(
    90deg,
    ${colors.lnOrange} 0%,
    ${colors.lnPink} 36%,
    ${colors.lnPurple}68%,
    ${colors.lnBlue} 98%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CursorWrapper = styled.div`
  font-size: 28px;
  font-weight: 700;
`;
