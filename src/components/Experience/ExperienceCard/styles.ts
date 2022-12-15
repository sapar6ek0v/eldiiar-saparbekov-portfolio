import styled from 'styled-components';

export const ExperienceCardTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.92);
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
`;

export const CompanyLink = styled.a`
  color: #46c2cb;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
`;

export const RangeTitle = styled.p`
  color: rgba(255, 255, 255, 0.55);
  font-size: 14px;
  margin-bottom: 25px;
`;

export const ResponsibilityStack = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ResponsibilityCard = styled.li`
  position: relative;
  color: rgba(255, 255, 255, 0.61);
  font-size: 14px;
  padding-left: 30px;
  &::before {
    content: '▹';
    color: #46c2cb;
    position: absolute;
    left: 0px;
  }
`;
