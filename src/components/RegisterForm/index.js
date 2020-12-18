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
        EnterButton
      </EnterButton>
    </Form>
  );
}

export default RegisterForm;