import styled from 'styled-components';
import { colors } from '../../../../../constants/colors';

type WrapperProps = {
  opened: boolean;
};

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 600;
  bottom: 0;
  width: 61.8%;
  height: 100%;
  background: #212121;
  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${(props: WrapperProps) => (props.opened ? 'translateX(0)' : 'translateX(-100%)')};
  opacity: ${(props: WrapperProps) => (props.opened ? '1' : 0)};
  transition: all 0.4s ease;
`;

export const InfoContainer = styled.div`
  padding: 0 6rem;
`;

export const InfoTitle = styled.h3`
  color: ${colors.white};
  font-size: 1.3rem;
  line-height: 1.1em;
  margin-bottom: 1rem;
`;

export const InfoDescription = styled.p`
  font-size: 1rem;
  line-height: 1.3em;
  color: ${colors.darkGray};
`;
