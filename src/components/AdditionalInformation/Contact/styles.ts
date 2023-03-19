import styled from 'styled-components';

import { ComponentContainer } from '../styles';

export const Container = styled(ComponentContainer)`
  ${({ theme }) => theme.mixins.column};
  gap: 1.6rem;
`;
