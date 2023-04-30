import { FC } from 'react'

import { Button } from './styles';

type Props = {
  toggle: () => void;
  isOpen: boolean;
}

export const BurgerButton: FC<Props> = ({ toggle, isOpen }) => (
  <Button onClick={toggle} type="button" $isOpen={isOpen} />
);

export default BurgerButton;