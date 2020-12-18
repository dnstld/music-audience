import {
  Container
} from './styles';

function Input({children, ...rest}) {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
}

export default Input;
