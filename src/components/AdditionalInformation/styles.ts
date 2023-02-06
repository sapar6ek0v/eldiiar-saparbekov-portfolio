import styled from 'styled-components';

export const Wrapper = styled.section`
  grid-column-start: 2;
  grid-column-end: 2;
`;

export const Container = styled.div`
  width: 82%;
`;

export const ExtraSmallTitle = styled.p`
  font-size: 8px;
  letter-spacing: 0.14em;
  font-weight: 800;
  color: #fff;
  text-align: start;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Line = styled.div`
  width: 1.6rem;
  height: 0;
  border-width: 0;
  margin-top: 1rem;
  border-color: #fff;
  border-style: solid;
  border-bottom-width: 0.1rem;
`;

export const TitleStack = styled(Stack)`
  gap: 1.4rem;
`;

export const Title = styled.h5`
  font-size: 2rem;
  letter-spacing: 0.03em;
  line-height: 1;
  font-weight: 300;
  font-style: normal;
  color: #fff;
  padding-left: 1rem;
`;

export const TitleLine = styled(Line)`
  margin-top: 1px;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.4em;
  letter-spacing: -0.005em;
  font-weight: 300;
  color: #7c7c7c;
`;

export const ComponentWrapper = styled.section`
  padding-bottom: 107.6px;
`;

export const ComponentContainer = styled.div`
  padding: 10px;
`;
