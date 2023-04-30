import { cvUrl } from '../../../../constants/cvUrl';
import { LinkBtn } from '../../../styles';
import useNavbarData from '../hooks/useNavbarData';
import NavLink from './NavLink';
import { Group } from './styles';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const ListItem = () => {
  const navLinks = useNavbarData();

  return (
    <Group
      variants={variants}
    >
      {navLinks.map((navLink) => <NavLink key={navLink.id} navLink={navLink} />)}
      <LinkBtn
        href={cvUrl}
        target='_blank'
      >
        Resume
      </LinkBtn>
    </Group>
  )
}

export default ListItem