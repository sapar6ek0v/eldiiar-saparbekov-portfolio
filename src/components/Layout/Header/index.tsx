import { FC } from 'react';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialIcon } from 'react-social-icons';

import { colors } from '../../../constants/colors';
import { HeaderButton, HeaderContainer, HeaderFixedContainer, HeaderGroup, HeaderItem, HeaderLink } from './styles';
import Link from 'next/link';

const links = [
  {
    id: '1',
    path: '#about',
    title: 'About',
  },
  {
    id: '2',
    path: '#experience',
    title: 'Experience',
  },
  {
    id: '3',
    path: '#projects',
    title: 'Projects',
  },
  {
    id: '4',
    path: '#contacts',
    title: 'Contacts',
  },
];

const socialIcons = [
  {
    id: '1',
    icon: faGithub,
    link: 'https://github.com/sapar6ek0v',
  },
  {
    id: '2',
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/eldiiar-saparbekov/',
  },
  {
    id: '3',
    icon: faTelegram,
    link: 'https://t.me/Eldiiar_Saparbekov',
  }
]

const Header: FC = () => {
  return (
    <HeaderFixedContainer>
      <HeaderContainer>

        <HeaderGroup
          gap={20}
          initial={{ x: 500, scale: 0.5, opacity: 0 }}
          animate={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {
            links.map((link) =>
              <HeaderItem key={link.id}>
                <HeaderLink href={link.path}>{link.title}</HeaderLink>
              </HeaderItem>)
          }
        </HeaderGroup>

        <HeaderGroup
          gap={13}
          initial={{ x: -500, scale: 0.5, opacity: 0 }}
          animate={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {
            socialIcons.map((item) =>
              <HeaderButton key={item.id}>
                <Link href={item.link} target='_blank'><FontAwesomeIcon icon={item.icon} /></Link>
              </HeaderButton>)
          }
        </HeaderGroup>

      </HeaderContainer>
    </HeaderFixedContainer>
  );
};

export default Header;