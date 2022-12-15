import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Title } from '../styles';

export const ExperienceWrapper = styled(motion.div)``;

export const ExperienceFlexContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const ButtonStack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 42px;
  display: flex;
  position: relative;
  align-items: center;
  padding: 0px 20px 2px;
  border: 0px;
  border-radius: 0px;
  border-left: 2px solid #233554;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.61);
  font-size: 14px;
  text-align: left;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &.active {
    border-left: 2px solid #46c2cb;
    color: #46c2cb;
  }
`;

export const ExperienceTitle = styled(Title)`
  p {
    order: 2;
  }

  &::before {
    content: '';
    display: block;
    width: 50%;
    height: 1px;
    background-color: #46c2cb;
    order: 1;
  }

  &::after {
    width: 50%;
    order: 3;
  }
`;
