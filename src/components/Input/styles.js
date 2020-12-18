import styled from 'styled-components';

import {
  fontSizes,
  fontWeight,
  colors,
  spacing,
} from '../../designTokens';

const INPUT = {
  borderRadius: spacing.spacer6,
  padding: `${spacing.spacer11} ${spacing.spacer12}`,
  fontSize: fontSizes.font15,
  fontWeight: fontWeight.bold,
  color: colors.grey300,
  boxShadow: `0px 3px 6px rgba(0, 0, 0, .25)`,
  transformPlaceholder: `opacity .25s ease-in-out`,
};

export const Container = styled.div`
  width: 100%;

  > input {
    width: inherit;
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