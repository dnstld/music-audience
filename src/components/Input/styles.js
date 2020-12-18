import styled from 'styled-components';

import {
  fontSizes,
  fontWeight,
  colors,
  spacing,
} from '../../styles/designTokens';

import { form } from '../../styles/elements/form';

const INPUT = {
  background: form.input.background,
  borderRadius: form.input.borderRadius,
  boxShadow: form.input.boxShadow,
  padding: `${spacing.spacer11} ${spacing.spacer12}`,
  fontSize: fontSizes.font15,
  fontWeight: fontWeight.bold,
  color: colors.grey300,
  transformPlaceholder: `opacity .25s ease-in-out`,
};

export const Container = styled.div`
  width: 100%;

  > input {
    width: inherit;
    border-radius: ${INPUT.background};
    color: ${INPUT.color};
    text-align: center;
    text-transform: uppercase;
    font-size: ${INPUT.fontSize};
    font-weight: ${INPUT.fontWeight};
    padding: ${INPUT.padding};
    border: none;
    border-radius: ${INPUT.borderRadius};
    box-shadow: ${INPUT.boxShadow};

    &::placeholder {
      color: inherit;
      transition: ${INPUT.transformPlaceholder};
    }
    &:focus {
      outline: 0;

      &::placeholder {
        opacity: 0;
      }
    }
  }
`;