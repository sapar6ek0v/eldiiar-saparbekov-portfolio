import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import ModalProvider from '../../context/modalContext';
import theme from '../../styles/theme';
import GlobalStyles from '../../styles/GlobalStyles';
import Modal from '../Modal';
import Header from './Header';
import { LayoutWrapper, Container } from './styles';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <LayoutWrapper>
          <GlobalStyles />
          <Header />
          <Container>
            {children}
          </Container>
          <Modal />
        </LayoutWrapper>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default Layout;