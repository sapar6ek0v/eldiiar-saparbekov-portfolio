import { FC } from 'react'

import { variants } from '../../../../../constants/animation-constants';
import { Button } from './styles';

type Props = {
  toggle: () => void;
  isOpen: boolean;
}

export const BurgerButton: FC<Props> = ({ toggle, isOpen }) => (
  <Button onClick={toggle} type="button" $isOpen={isOpen} variants={variants} custom={1.3} />
);

export default BurgerButton;