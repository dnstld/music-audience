import {
  Container,
  Cover,
  RegisterColumn,
} from './styles';

function Home() {
  return (
    <Container>
      <Cover>
        <h1>Artist name</h1>
      </Cover>
      <RegisterColumn>
        <h1>Music Audience</h1>
      </RegisterColumn>
    </Container>
  );
}

export default Home;
