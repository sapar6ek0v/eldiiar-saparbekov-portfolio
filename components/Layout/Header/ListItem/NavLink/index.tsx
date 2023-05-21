import { FC } from 'react';
import { IconType } from 'react-icons';

import { stiffnessVariants } from '../../../../../constants/animation-constants';
import useMediaQuery from '../../../../../helpers/hooks/useMediaQuery';
import { NavLink } from '../../../../../helpers/types';
import { LinkItem, Wrapper } from './styles';

type Props = {
  navLink: NavLink;
}

const NavLink: FC<Props> = ({ navLink }) => {
  const matches = useMediaQuery('(min-width: 768px)');

  const Icon: IconType = navLink.icon;

  return (
    <Wrapper variants={stiffnessVariants}>
      <LinkItem href={navLink.path}>
        {!matches ? <Icon /> : null}
        <span className="inner-span">
          <span className="default">{navLink.title}</span>
          <span className="active">{navLink.title}</span>
        </span>
      </LinkItem>
    </Wrapper>
  )
}

export default NavLink