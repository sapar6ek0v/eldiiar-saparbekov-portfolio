import { useId } from 'react';
import { BiUser, BiMailSend } from 'react-icons/bi';
import { BsGrid } from 'react-icons/bs';
import { MdOutlineSummarize } from 'react-icons/md';

import { NavLink } from '../../../../helpers/types';

export default function useNavbarData() {
  const navLinks: NavLink[] = [
    {
      id: useId(),
      path: '#about',
      title: 'About',
      icon: BiUser,
    },
    {
      id: useId(),
      path: '#experience',
      title: 'Experience',
      icon: MdOutlineSummarize,
    },
    {
      id: useId(),
      path: '#projects',
      title: 'Projects',
      icon: BsGrid,
    },
    {
      id: useId(),
      path: '#contacts',
      title: 'Contacts',
      icon: BiMailSend,
    },
  ];

  return navLinks;
}
