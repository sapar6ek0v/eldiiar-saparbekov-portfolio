import styled from 'styled-components';

export const Wrapper = styled.section`
  position: fixed;
  height: 100%;
  width: 50%;
  top: 0;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  perspective: 38rem;
`;

export const Inner = styled.div`
  position: relative;
  width: 26vw;
  height: 32vw;
  transform: rotateY(5deg);
`;

export const NameWrapper = styled.div`
  position: absolute;
  left: 1.2rem;
  bottom: 0.7rem;
  z-index: 10;
`;

export const Name = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: #fff;
  letter-spacing: 0.02em;
`;

export const SeperatorLine = styled.div`
  margin-top: 0.4rem;
  width: 4rem;
  height: 0;
  border-width: 0;
  border-color: #fff;
  border-style: solid;
  border-bottom-width: 0.1rem;
`;

export const PictureBox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  overflow: hidden;
  top: 0;

  canvas {
    width: 354px;
    height: 448px;
  }
`;

export const Frame = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -2;
  border: 1px solid #fff;
`;

export const Frame1 = styled(Frame)`
  opacity: 0.25;
  transform: translate(-0.7rem, 0.7rem);
`;

export const Frame2 = styled(Frame)`
  opacity: 0.15;
  transform: translate(-1.4rem, 1.4rem);
`;

export const Frame3 = styled(Frame)`
  opacity: 0.05;
  transform: translate(-2.2rem, 2.2rem);
`;
