import styled from 'styled-components';
import { colors } from '../../../constants/colors';

type ParallaxCardWrapperProps = {
  imgUrl: string;
};

export const ParallaxCardWrapper = styled.div`
  background-color: ${colors.projectBg};
  background-image: ${(props: ParallaxCardWrapperProps) => `url(${props.imgUrl})`};
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 40px;
`;

export const ParallaxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ProjectStackTextGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ProjectStackText = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: ${colors.white};
  letter-spacing: 1.2px;

  &::after {
    content: ',';
  }

  &:last-child::after {
    content: '';
  }
`;

export const ProjectViewButton = styled.button`
  background-color: ${colors.black};
  border: none;
  outline: none;
  box-shadow: ${colors.shadow} 1.95px 1.95px 2.6px;
  text-align: center;
  width: 170px;
  height: 60px;

  &:hover {
    a {
      color: ${colors.white};
    }
  }

  a {
    text-decoration: none;
    color: ${colors.blue};
    font-weight: 700;
    font-size: 24px;
    display: inline-block;
    position: relative;
    transition: color 0.4s ease 0s;

    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0px;
      background-color: ${colors.blue};
      height: 2px;
      width: 100%;
    }
  }
`;
