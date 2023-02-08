import { FC, ReactNode } from 'react';

import Header from './Header';
import { LayoutWrapper, Container } from './styles';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <LayoutWrapper >
      <Header />
      <Container>
        {children}
      </Container>
    </LayoutWrapper>
  );
};

export default Layout;