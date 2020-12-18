import artistName from '../../assets/images/artist-name.png';

import {
  Container,
  Cover,
  ArtistName,
  RegisterColumn,
} from './styles';

function Home() {
  return (
    <Container>
      <Cover>
        <ArtistName src={artistName} alt="KEM"/>
      </Cover>
      <RegisterColumn>
        <h1>Music Audience</h1>
      </RegisterColumn>
    </Container>
  );
}

export default Home;
