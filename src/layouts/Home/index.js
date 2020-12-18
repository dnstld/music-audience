import artistName from '../../assets/images/artist-name.png';
import secondaryAd from '../../assets/images/secondary-ad.jpg';
import formHeading from '../../assets/images/form-heading.png';

import {
  Container,
  Cover,
  ArtistName,
  RegisterColumn,
  RegisterSection,
  RegisterContent,
  RegisterHeading,
  Ad,
} from './styles';

function Home() {
  return (
    <Container>
      <Cover>
        <ArtistName src={artistName} alt="KEM"/>
      </Cover>
      <RegisterColumn>
        <RegisterSection>
          <RegisterContent>
            <RegisterHeading
              src={formHeading}
              alt="Register to see an exclusive livestream performance with Kem and be entered for a chance to win a virtual meet and greet"
            />
            <h1>Register section</h1>
          </RegisterContent>
        </RegisterSection>
        <Ad src={secondaryAd} alt="Ad: Listen to the full song"/>
      </RegisterColumn>
    </Container>
  );
}

export default Home;
