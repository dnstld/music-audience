import {
  Container,
  Header,
  LogoPepsi
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

      <footer>
        Footer
      </footer>
    </Container>
  );
}

export default Layout;
