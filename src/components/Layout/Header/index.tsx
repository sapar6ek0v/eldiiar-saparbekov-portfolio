import Link from 'next/link';
import { FC, useId } from 'react';
import { useTransform, useScroll } from 'framer-motion';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';

import { variants } from '../../../constants/animation-constants';
import useMediaQuery from '../../../helpers/hooks/useMediaQuery';
import ListItem from './ListItem';
import BurgerMenu from './BurgerMenu';
import {
  HeaderButton,
  HeaderContainer,
  HeaderFixedContainer,
  HeaderGroup,
} from './styles';

const Header: FC = () => {
  const matches = useMediaQuery('(min-width: 768px)')
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 400],
    ["transparent", "#212121"],
  );

  const socialIcons = [
    {
      id: useId(),
      icon: <FaGithub />,
      link: 'https://github.com/sapar6ek0v',
    },
    {
      id: useId(),
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/eldiiar-saparbekov/',
    },
    {
      id: useId(),
      icon: <FaTelegram />,
      link: 'https://t.me/Eldiiar_Saparbekov',
    }
  ];

  return (
    <HeaderFixedContainer
      initial='hidden'
      animate='enter'
      exit='exit'
      style={{ backgroundColor }}
    >
      <HeaderContainer>
        <HeaderGroup
          variants={variants}
          custom={1.3}
        >
          {
            socialIcons.map((item) =>
              <HeaderButton key={item.id}>
                <Link href={item.link} target='_blank'>{item.icon}</Link>
              </HeaderButton>)
          }
        </HeaderGroup>
        {matches ? <ListItem /> : <BurgerMenu />}
      </HeaderContainer>
    </HeaderFixedContainer>
  );
};

export default Header;