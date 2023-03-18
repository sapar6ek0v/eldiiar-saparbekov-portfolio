import Link from 'next/link';
import { FC, useId } from 'react';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';

import { variants } from '../../../constants/animation-constants';
import { cvUrl } from '../../../constants/cvUrl';
import { LinkBtn } from '../../styles';
import {
  HeaderButton,
  HeaderContainer,
  HeaderFixedContainer,
  HeaderGroup,
  HeaderItem,
  HeaderLink
} from './styles';

const Header: FC = () => {
  const data = {
    links: [
      {
        id: useId(),
        path: '#about',
        title: 'About',
      },
      {
        id: useId(),
        path: '#experience',
        title: 'Experience',
      },
      {
        id: useId(),
        path: '#projects',
        title: 'Projects',
      },
      {
        id: useId(),
        path: '#contacts',
        title: 'Contacts',
      },
    ],

    socialIcons: [
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
    ]
  };

  return (
    <HeaderFixedContainer
      initial='hidden'
      animate='enter'
      exit='exit'
    >
      <HeaderContainer>
        <HeaderGroup
          gap={13}
          variants={variants}
          custom={1.3}
        >
          {
            data.socialIcons.map((item) =>
              <HeaderButton key={item.id}>
                <Link href={item.link} target='_blank'>{item.icon}</Link>
              </HeaderButton>)
          }
        </HeaderGroup>
        <HeaderGroup
          gap={20}
          variants={variants}
          custom={1.3}
        >
          {
            data.links.map((link) =>
              <HeaderItem key={link.id}>
                <HeaderLink href={link.path}>{link.title}</HeaderLink>
              </HeaderItem>)
          }
          <LinkBtn
            href={cvUrl}
            target='_blank'
          >
            Resume
          </LinkBtn>
        </HeaderGroup>
      </HeaderContainer>
    </HeaderFixedContainer>
  );
};

export default Header;