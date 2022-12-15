import Image from 'next/image';
import styled from 'styled-components';

export const ParallaxWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ParallaxTextWrapper = styled.div`
  text-align: center;
`;

export const OverFlow = styled.div`
  height: 100vh;
`;

export const ParallaxBgImage = styled(Image)`
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;
