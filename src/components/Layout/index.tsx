import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import GlobalStyles from '../../styles/GlobalStyles';
import Header from './Header';
import { LayoutWrapper, Container } from './styles';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <GlobalStyles />
        <Header />
        <Container>
          {children}
        </Container>
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;