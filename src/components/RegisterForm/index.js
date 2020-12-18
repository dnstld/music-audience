import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

import {
  Form,
  FirstName,
  LastName,
  ZipCode,
  Email,
  AgreeCheckbox,
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
      <AgreeCheckbox>
        <Checkbox>
          By checking this box and clicking enter, I agree that I am 21 years of age or older.
        </Checkbox>
      </AgreeCheckbox>
      <EnterButton>
        <Button type="button">
          Enter
        </Button>
      </EnterButton>
    </Form>
  );
}

export default RegisterForm;
