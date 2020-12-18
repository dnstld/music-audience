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
        FirstName
      </FirstName>
      <LastName>
        LastName
      </LastName>
      <ZipCode>
        ZipCode
      </ZipCode>
      <Email>
        Email
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
