import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const ExperienceCardTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  color: ${colors.white};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
`;

export const CompanyLink = styled.a`
  color: ${colors.blue};
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
`;

export const RangeTitle = styled.p`
  color: ${colors.gray};
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
  color: ${colors.secondaryGray};
  font-size: 14px;
  padding-left: 30px;
  &::before {
    content: '▹';
    color: ${colors.blue};
    position: absolute;
    left: 0px;
  }
`;
