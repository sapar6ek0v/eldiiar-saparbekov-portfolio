import { FC } from 'react';
import { BrandGithub, BrandLinkedin, BrandTelegram } from 'tabler-icons-react';
import { HeaderContainer, HeaderFixedContainer, HeaderGroup, HeaderLink } from './styles';

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
            <BrandGithub size={20} strokeWidth={2} color={'rgba(255, 255, 255, 0.92)'} />
            <BrandLinkedin size={20} strokeWidth={2} color={'rgba(255, 255, 255, 0.92)'} />
            <BrandTelegram size={20} strokeWidth={2} color={'rgba(255, 255, 255, 0.92)'} />
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