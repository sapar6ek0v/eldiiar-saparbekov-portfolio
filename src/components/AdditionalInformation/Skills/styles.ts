import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

export const SkillCard = styled.div`
  color: #7c7c7c;
  svg {
    width: 40px;
    height: 40px;
  }
`;
