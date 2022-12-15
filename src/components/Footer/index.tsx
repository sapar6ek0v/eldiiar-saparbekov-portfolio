import { FC } from 'react';
import { FooterTitle, FooterWrapper } from './styles';

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterTitle>
        &copy; {new Date().getFullYear()}  Eldiiar Saparbekov. All Rights Reserved.
      </FooterTitle>
    </FooterWrapper>
  );
};

export default Footer;