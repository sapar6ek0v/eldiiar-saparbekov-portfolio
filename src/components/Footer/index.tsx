import { FC } from 'react';
import { variants } from '../../constants/animation-constants';
import { FooterTitle, FooterWrapper } from './styles';

const Footer: FC = () => {
  return (
    <FooterWrapper
      initial='hidden'
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.2, once: true }}
    >
      <FooterTitle variants={variants} custom={1}>
        &copy; {new Date().getFullYear()}  Eldiiar Saparbekov. All Rights Reserved.
      </FooterTitle>
    </FooterWrapper>
  );
};

export default Footer;