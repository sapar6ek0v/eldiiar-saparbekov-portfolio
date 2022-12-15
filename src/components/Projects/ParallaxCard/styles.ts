import styled from 'styled-components';

type ParallaxCardWrapperProps = {
  imgUrl: string;
};

export const ParallaxCardWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
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
  font-weight: 500;
  line-height: 20px;
  color: #fff;
  /* background-image: linear-gradient(0% #111, 100% #46c2cb);
  background-clip: text; */

  &::after {
    content: ',';
  }

  &:last-child::after {
    content: '';
  }
`;

export const ProjectViewButton = styled.button`
  background-color: #111;
  border: none;
  outline: none;
  box-shadow: 0 1px 4px rgba(255, 255, 255, 0.6);
  text-align: center;
  width: 170px;
  height: 60px;

  &:hover {
    a {
      color: #fff;
    }
  }

  a {
    text-decoration: none;
    color: #46c2cb;
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
      background-color: #46c2cb;
      height: 2px;
      width: 100%;
    }
  }
`;
