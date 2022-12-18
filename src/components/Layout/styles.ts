import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const LayoutWrapper = styled.div`
  background: ${colors.black};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;
