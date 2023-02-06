import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { ComponentContainer } from '../styles';

export const Container = styled(ComponentContainer)`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  color: #fff;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: -0.005em;
  font-weight: 300;
  padding: 0 0 1.2rem;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  background: transparent;
  transition: all 0.4s linear;

  &:is(:hover, :focus, :active, :focus-within) {
    border-bottom: 1px solid #fdc60c;
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  display: block;
  color: #fff;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: -0.005em;
  font-weight: 300;
  padding: 0 0 1.2rem;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  background: transparent;
  transition: all 0.4s linear;

  &:is(:hover, :focus, :active, :focus-within) {
    border-bottom: 1px solid #fdc60c;
    outline: none;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Button = styled.button`
  height: 46px;
  user-select: none;
  background: 0 0;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  line-height: 16px;
  font-weight: 300;
  letter-spacing: -0.005em;
  transition: all 0.4s linear;

  &:is(:hover, :active, :focus) {
    color: #fdc60c;
    outline: none;

    svg {
      border-color: #fdc60c;
    }
  }
`;

export const CircleIcon = styled(FontAwesomeIcon)`
  width: 27px;
  height: 27px;
  padding: 4px 5px;
  border-radius: 50%;
  border: 1px solid #fff;
  transition: all 0.4s linear;
`;

export const InformTitle = styled.p`
  color: #7c7c7c;
  font-size: 0.7rem;
  line-height: 1.48em;
  letter-spacing: 0;
  font-weight: 400;
`;
