import artistName from '../../assets/images/artist-name.png';
import secondaryAd from '../../assets/images/secondary-ad.jpg';

import {
  Container,
  Cover,
  ArtistName,
  RegisterColumn,
  RegisterSection,
  Ad
} from './styles';

function Home() {
  return (
    <Container>
      <Cover>
        <ArtistName src={artistName} alt="KEM"/>
      </Cover>
      <RegisterColumn>
        <RegisterSection>
          <h1>Register section</h1>
        </RegisterSection>
        <Ad src={secondaryAd} alt="Ad: Listen to the full song"/>
      </RegisterColumn>
    </Container>
  );
}

export default Home;
