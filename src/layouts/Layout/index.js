import {
  Container,
  Header,
  LogoPepsi,
  Footer,
} from './styles';

import logoPepsi from '../../assets/images/logo.png';

function Layout({ children }) {
  return (
    <Container>
      <Header>
        <LogoPepsi src={logoPepsi} alt="Pepsi" />
      </Header>

      <main>
        {children}
      </main>

      <Footer>
        <span>© 2020 Music Audience Exchange.</span>
        <span>Privacy Policy, Powered by Music Audience Exchange.</span>
      </Footer>
    </Container>
  );
}

export default Layout;
