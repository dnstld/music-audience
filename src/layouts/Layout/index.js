import {
  Container,
} from './styles';

function Layout({ children }) {
  return (
    <Container>
      <header>
        Header
      </header>

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
