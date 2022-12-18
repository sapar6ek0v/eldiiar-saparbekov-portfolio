import { FC } from 'react';
import { SocialIcon } from 'react-social-icons';
import { colors } from '../../constants/colors';
import { Button, HeaderContainer, HeaderFixedContainer, HeaderGroup, HeaderLink } from './styles';

const links = [
  {
    path: '#about',
    title: 'about',
  },
  {
    path: '#experience',
    title: 'experience',
  },
  {
    path: '#projects',
    title: 'projects',
  },
  {
    path: '#contacts',
    title: 'contacts',
  },
];

const Header: FC = () => {
  return (
    <HeaderFixedContainer>
      <HeaderContainer>
        <HeaderGroup justify='space-between' gap={20}>
          <HeaderGroup
            gap={15}
            initial={{ x: -500, scale: 0.5, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Button>
              <SocialIcon
                url='https://github.com/sapar6ek0v'
                network='github'
                fgColor={colors.white}
                bgColor='transparent'
                style={{ height: 30, width: 30 }}
                target='_blank'
              />
            </Button>
            <Button>
              <SocialIcon
                url='https://www.linkedin.com/in/eldiiar-saparbekov/'
                network='linkedin'
                fgColor={colors.white}
                bgColor='transparent'
                style={{ height: 30, width: 30 }}
                target='_blank'
              />
            </Button>
            <Button>
              <SocialIcon
                url='https://t.me/Eldiiar_Saparbekov'
                network='telegram'
                fgColor={colors.white}
                bgColor='transparent'
                style={{ height: 30, width: 30 }}
                target='_blank'
              />
            </Button>
          </HeaderGroup>
          <HeaderGroup
            gap={20}
            initial={{ x: 500, scale: 0.5, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {
              links.map((link) => <HeaderLink key={link.path} href={link.path}>{link.title}</HeaderLink>)
            }
          </HeaderGroup>
        </HeaderGroup>
      </HeaderContainer>
    </HeaderFixedContainer>
  );
};

export default Header;