import {
  Container
} from './styles';

function Checkbox({children, ...rest}) {
  return (
    <Container>
      <input
        type="checkbox"
        value="value"
        id="input-checkbox"
        {...rest}
      />
      <label htmlFor="input-checkbox"></label>
      <p>
        {children}
      </p>
    </Container>
  );
}

export default Checkbox;