import styled from 'styled-components';

import {
  breakpoints,
} from '../../designTokens';

const REGISTER_COLUMN = {
  widthDesktop: '638px',
}

export const Container = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    display: grid;
    grid-template-columns: ${REGISTER_COLUMN.widthDesktop} 1fr;
  }
`;

export const Cover = styled.div``;

export const RegisterColumn = styled.div``;