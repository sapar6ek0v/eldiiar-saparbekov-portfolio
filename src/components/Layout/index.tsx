import { FC, ReactNode } from 'react';
import Header from '../Header';
import { ContentContainer, LayoutWrapper } from './styles';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentContainer>
        {children}
      </ContentContainer>
    </LayoutWrapper>
  );
};

export default Layout;