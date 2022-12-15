import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  background: #111;
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
  gap: 40px;
`;
