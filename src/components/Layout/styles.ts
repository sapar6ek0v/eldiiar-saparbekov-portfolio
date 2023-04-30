import styled from 'styled-components';

export const LayoutWrapper = styled.main`
  /* margin-top: 68px; */
`;

export const Container = styled.div`
  width: min(90%, 1140px);
  margin-inline: auto;
`;

export const Grid = styled.div`
  padding: 0 var(--container-padding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 75px);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }
`;
