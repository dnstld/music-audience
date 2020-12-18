import styled from 'styled-components';

import checkIcon from '../../assets/images/check-mark.svg';

import {
  fontSizes,
  fontWeight,
  spacing,
} from '../../designTokens';

import { form } from '../../styles/elements/form';

const LABEL = {
  background: form.input.background,
  borderRadius: form.input.spacer6,
  boxShadow: form.input.boxShadow,
  size: '33px',
};

const P ={
  marginLeft: spacing.spacer11,
  fontWeight: fontWeight.bold,
  fontSize: fontSizes.font14,
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
  }
`;