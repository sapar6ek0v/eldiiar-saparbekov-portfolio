import { motion } from 'framer-motion';
import styled from 'styled-components';

import { TitleLine } from '../../styles';

export const Wrapper = styled(motion.figure)`
  position: relative;
  cursor: pointer;
  padding-bottom: 46%;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, var(--dark2), 70%, var(--light-dark-gray));
  }

  &:is(:hover, :focus) {
    button {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Info = styled.figcaption`
  position: absolute;
  left: 2.3rem;
  bottom: 1.4rem;
  z-index: 2;
  overflow: hidden;
  ${({ theme }) => theme.mixins.column};
  gap: 0.5rem;
`;

export const InfoTitle = styled.p`
  ${({ theme }) => theme.mixins.fontSize20};
  font-weight: 400;
  color: var(--white);
`;

export const InfoLine = styled(TitleLine)``;

type DisplayImageProps = {
  imgUrl: string;
};

export const DisplayImage = styled.div`
  background-image: ${(props: DisplayImageProps) => `url(${props.imgUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  height: 1.8rem;
  width: 1.8rem;
  position: absolute;
  right: 2.3rem;
  bottom: 1.5rem;
  z-index: 2;
  opacity: 0;
  padding: 6px;

  ${({ theme }) => theme.mixins.fontSize16};
  color: var(--white);

  border: 0.1rem solid var(--white);
  border-radius: 100%;
  ${({ theme }) => theme.mixins.fCenter};
  transform: scale(0);
  transition: all 0.25s linear;

  &:is(:hover, :focus, :active) {
    color: var(--yellow);
    border-color: var(--yellow);
  }
`;
