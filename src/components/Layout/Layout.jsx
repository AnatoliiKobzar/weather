import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import logo from '../../logo/logo.png';
import {
  Container,
  Footer,
  Header,
  HeaderContainer,
  Wrap,
} from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <HeaderContainer>
          <Wrap>
            <img src={logo} alt="logo" width="40px" />
            <p>Weather App</p>
          </Wrap>
          <Navigation />
        </HeaderContainer>
      </Header>
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
      <Container>
        <Footer>
          <p>Created by Anatolii Kobzar</p>
        </Footer>
      </Container>
    </div>
  );
};

export default Layout;
