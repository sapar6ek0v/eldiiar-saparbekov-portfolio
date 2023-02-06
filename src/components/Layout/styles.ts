import styled from 'styled-components';

export const LayoutWrapper = styled.main`
  margin-top: 68px;
`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 68px);
`;
