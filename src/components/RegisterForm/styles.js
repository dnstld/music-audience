import styled from 'styled-components';

import {
  spacing,
} from '../../designTokens';

const FORM = {
  gap: spacing.spacer11
}

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-gap: ${FORM.gap};
  grid-template-areas:
    'firstName lastName'
    'zipCode zipCode'
    'email email'
    'agreeCheckbox agreeCheckbox'
    'enterButton enterButton';
`;

export const FirstName = styled.div`
  grid-area: firstName;
`;

export const LastName = styled.div`
  grid-area: lastName;
`;

export const ZipCode = styled.div`
  grid-area: zipCode;
`;

export const Email = styled.div`
  grid-area: email;
`;

export const AgreeCheckbox = styled.div`
  grid-area: agreeCheckbox;
`;

export const EnterButton = styled.div`
  grid-area: enterButton;
`;