import Link from 'next/link';
import styled from 'styled-components';

import { colors } from '../../constants/colors';

export const LinkBtn = styled(Link)`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1.2px;
  color: ${colors.white};
  padding: 5px 8px;
  background-color: ${colors.dark3};
  border: none;
  border-radius: 0 0 0 0% / 0% 0% 0% 0%;
  box-shadow: 15px 15px ${colors.darkShadow};
  transition: all 0.4s linear;

  &:is(:hover, :active, :focus) {
    outline: none;
    border-radius: 0 0 50% 50% / 0% 0% 5% 5%;
    box-shadow: 10px 10px ${colors.darkShadowHover};
    background-color: ${colors.yellow};
    color: ${colors.dark3};
  }
`;
