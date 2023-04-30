import { FC } from 'react';

import { NavLink } from '../../../../../helpers/types';
import { LinkItem, Wrapper } from './styles';

type Props = {
  navLink: NavLink;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const NavLink: FC<Props> = ({ navLink }) => {
  return (
    <Wrapper variants={variants}>
      <LinkItem href={navLink.path}>
        <span className="inner-span">
          <span className="default">{navLink.title}</span>
          <span className="active">{navLink.title}</span>
        </span>
      </LinkItem>
    </Wrapper>
  )
}

export default NavLink