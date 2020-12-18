import styled from 'styled-components';

import {
  fontSizes,
  fontWeight,
  colors,
  spacing,
} from '../../styles/designTokens';

const BUTTON = {
  fontSize: fontSizes.font22,
  fontWeight: fontWeight.bold,
  color: colors.white,
  borderWidth: '3px',
  borderRadius: '25px',
  height: '50px',
  transform: `box-shadow .3s ease-in-out`,
  focus: `0 0 0 ${spacing.spacer4} ${colors.primaryDark}`,
}

export const Button = styled.button`
  appearance: none;
  background-color: transparent;
  color: ${BUTTON.color};
  width: 100%;
  height:  ${BUTTON.height};
  line-height: normal;
  font-size: ${BUTTON.fontSize};
  font-weight: ${BUTTON.fontWeight};
  text-transform: uppercase;
  border: ${BUTTON.borderWidth} solid currentColor;
  border-radius: ${BUTTON.borderRadius};
  padding: 0;
  user-select: none;
  cursor: pointer;
  transition: ${BUTTON.transform};

  &:hover,
  &:focus {
    outline: 0;
    box-shadow: ${BUTTON.focus};
  }
`;