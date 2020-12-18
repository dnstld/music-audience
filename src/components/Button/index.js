import {
  Button
} from './styles';

function RegisterForm({children, ...rest}) {
  return (
    <Button {...rest}>
      {children}
    </Button>
  );
}

export default RegisterForm;
