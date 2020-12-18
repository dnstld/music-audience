import styled from 'styled-components';

import {
  fontSizes,
  fontWeight,
  colors,
} from '../../styles/designTokens';

import { utils } from '../../styles/utils/focus';

const BUTTON = {
  fontSize: fontSizes.font22,
  fontWeight: fontWeight.bold,
  color: colors.white,
  borderWidth: '3px',
  borderRadius: '25px',
  height: '50px',
  focusTransform: utils.focus.transform,
  focusShadow: utils.focus.shadow,
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
  transition: ${BUTTON.focusTransform};

  &:hover,
  &:focus {
    outline: 0;
    box-shadow: ${BUTTON.focusShadow};
  }
`;