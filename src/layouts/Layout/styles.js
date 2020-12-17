import styled from 'styled-components';

import {
  colors,
  spacing,
  breakpoints,
} from '../../designTokens';

const variables = {
  containerMaxWidth: '1024px',

  headerHeight: '112px',
  headerBackground: colors.primary,
  headerPaddingXDesktop: spacing.spacer40,
  
  pepsiLogoWidth: '221px',
};

export const Container = styled.div`
  width: 100%;
  max-width: ${variables.containerMaxWidth};
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${variables.headerBackground};
  height: ${variables.headerHeight};

  @media (min-width: ${breakpoints.lg}) {
    padding-left: ${variables.headerPaddingXDesktop};
    padding-right: ${variables.headerPaddingXDesktop};
    justify-content: flex-start;
  }
`;

export const LogoPepsi = styled.img`
  width: ${variables.pepsiLogoWidth};
`;