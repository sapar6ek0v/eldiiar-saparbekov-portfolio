import { useId } from 'react';

import { NavLink } from '../../../../helpers/types';

export default function useNavbarData() {
  const navLinks: NavLink[] = [
    {
      id: useId(),
      path: '#about',
      title: 'About',
    },
    {
      id: useId(),
      path: '#experience',
      title: 'Experience',
    },
    {
      id: useId(),
      path: '#projects',
      title: 'Projects',
    },
    {
      id: useId(),
      path: '#contacts',
      title: 'Contacts',
    },
  ];

  return navLinks;
}
