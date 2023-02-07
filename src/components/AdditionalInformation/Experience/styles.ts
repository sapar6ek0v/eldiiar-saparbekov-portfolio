import styled from 'styled-components';

import { colors } from '../../../constants/colors';
import { ComponentContainer } from '../styles';

export const Container = styled(ComponentContainer)`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const TimeLine = styled.div`
  border-left-color: 0.1rem solid ${colors.shadowGray};
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;
