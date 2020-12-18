import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Form,
  FirstName,
  LastName,
  ZipCode,
  Email,
  Checkbox,
  EnterButton,
} from './styles';

function RegisterForm() {
  return (
    <Form>
      <FirstName>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
        />
      </FirstName>
      <LastName>
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
      </LastName>
      <ZipCode>
        <Input
          name="zip"
          type="text"
          pattern="[0-9]*"
          placeholder="Zip Code"
        />
      </ZipCode>
      <Email>
        <Input
          type="email"
          placeholder="Email Address"
        />
      </Email>
      <Checkbox>
        Checkbox
      </Checkbox>
      <EnterButton>
        <Button type="button">
          Enter
        </Button>
      </EnterButton>
    </Form>
  );
}

export default RegisterForm;
