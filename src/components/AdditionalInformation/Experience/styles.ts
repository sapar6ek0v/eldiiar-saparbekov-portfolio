import styled from 'styled-components';

import { ComponentContainer } from '../styles';

export const Container = styled(ComponentContainer)`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const TimeLine = styled.div`
  border-left-style: solid;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-left-width: 0.1rem;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;

export const TimeLineCard = styled.div`
  background: #181818;
  position: relative;
  text-align: start;
  padding: 2rem 2.2rem;
  margin-left: 1.5rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    z-index: 2;
  }

  &::before {
    left: 0;
    transform: translate(-50%, -50%) rotate(45deg);
    transform-origin: center center;
    width: 19px;
    height: 19px;
    background-color: inherit;
  }

  &::after {
    left: -1.5rem;
    transform: translate(-50%, -50%);
    height: 21px;
    width: 2px;
    background-color: #fff;
  }
`;

export const TimeLineGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TimeLineSubtitle = styled.p`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0;
  font-weight: 600;
  color: #fff;
`;

export const TimeLineTitle = styled.h6`
  font-size: 20px;
  line-height: 1.4em;
  letter-spacing: -0.005em;
  font-weight: 300;
  color: #fff;
  margin: 10px 0 8px;
`;
