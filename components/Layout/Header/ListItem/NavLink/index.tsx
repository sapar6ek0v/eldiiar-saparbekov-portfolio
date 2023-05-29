import { FC } from 'react';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';

import { stiffnessVariants } from '../../../../../constants/animation-constants';
import useMediaQuery from '../../../../../helpers/hooks/useMediaQuery';
import { NavLink } from '../../../../../helpers/types';
import { LinkItem, Wrapper } from './styles';

type Props = {
  navLink: NavLink;
  onClose?: () => void;
}

const NavLink: FC<Props> = ({ navLink, onClose }) => {
  const router = useRouter();
  const matches = useMediaQuery('(min-width: 768px)');

  const handleClose = () => onClose?.();

  const Icon: IconType = navLink.icon;

  return (
    <Wrapper variants={stiffnessVariants}>
      <LinkItem href={navLink.path} onClick={handleClose}>
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