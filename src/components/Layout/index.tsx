import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { MantineProvider } from '@mantine/core';

import ModalProvider from '../../context/modalContext';
import theme from '../../styles/theme';
import GlobalStyles from '../../styles/GlobalStyles';
import ProjectDetailsModal from '../ProjectDetailsModal';
import Header from './Header';
import { LayoutWrapper, Container } from './styles';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MantineProvider withGlobalStyles withNormalizeCSS >
        <ModalProvider>
          <LayoutWrapper>
            <GlobalStyles />
            <Header />
            <Container>
              {children}
            </Container>
            <ProjectDetailsModal />
          </LayoutWrapper>
        </ModalProvider>
      </MantineProvider>
    </ThemeProvider>
  );
};

export default Layout;