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
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), 70%, rgba(0, 0, 0, 0));
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 16px;
  color: #fff;
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
  position: absolute;
  right: 2.3rem;
  bottom: 1.5rem;
  z-index: 2;
  opacity: 0;
  font-size: 1.1rem;
  color: #fff;
  height: 1.8rem;
  width: 1.8rem;
  padding: 6px;
  border: 0.1rem solid #fff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  transition: all 0.25s linear;

  &:is(:hover, :focus, :active) {
    color: #fdc60c;
    border-color: #fdc60c;
  }
`;
