import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const FooterWrapper = styled.footer`
  padding: 20px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterTitle = styled.h5`
  opacity: 0.4;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.white};
`;
