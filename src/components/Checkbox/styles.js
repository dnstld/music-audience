import styled from 'styled-components';

import checkIcon from '../../assets/images/check-mark.svg';

import {
  fontSizes,
  fontWeight,
  spacing,
} from '../../styles/designTokens';

import { form } from '../../styles/elements/form';
import { utils } from '../../styles/utils/focus';

const LABEL = {
  background: form.input.background,
  borderRadius: form.input.borderRadius,
  boxShadow: form.input.boxShadow,
  size: '33px',
  focusTransform: utils.focus.transform,
  focusShadow: utils.focus.shadow,
};

const P ={
  marginLeft: spacing.spacer11,
  fontWeight: fontWeight.bold,
  fontSize: fontSizes.font14,
  lineHeight: '140%',
};

export const Container = styled.div`
  display: flex;

  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    z-index: -1;
    
    &:checked ~ label::after {
      opacity: 1;
    }
    &:focus ~ label {
      box-shadow: ${LABEL.focusShadow};
    }
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${LABEL.size};
    height: ${LABEL.size};
    cursor: pointer;
    box-shadow: ${LABEL.boxShadow};
    border-radius: ${LABEL.borderRadius};
    background-color: ${LABEL.background};
    transition: ${LABEL.focusTransform};

    &::after {
      content: url(${checkIcon});
      pointer-events: none;
      opacity: 0;
    }
  }
  p {
    margin-left: ${P.marginLeft};
    font-weight: ${P.fontWeight};
    font-size: ${P.fontSize};
    line-height: ${P.lineHeight};
  }
`;