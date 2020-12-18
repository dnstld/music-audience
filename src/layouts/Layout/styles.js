import styled from 'styled-components';

import {
  colors,
  spacing,
  breakpoints,
  fontSizes,
} from '../../styles/designTokens';

const CONTAINER = {
  maxWidth: '1024px',
};

const HEADER = {
  height: '112px',
  background: colors.primary,
  paddingXDesktop: spacing.spacer40,
};

const PEPSI_LOGO = {
  width: '221px',
};

const FOOTER = {
  background: HEADER.background,
  fontSize: fontSizes.font10,
  paddingXDesktop: HEADER.paddingXDesktop,
};

export const Container = styled.div`
  width: 100%;
  max-width: ${CONTAINER.maxWidth};
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${HEADER.background};
  height: ${HEADER.height};

  @media (min-width: ${breakpoints.lg}) {
    padding-left: ${HEADER.paddingXDesktop};
    padding-right: ${HEADER.paddingXDesktop};
    justify-content: flex-start;
  }
`;

export const LogoPepsi = styled.img`
  width: ${PEPSI_LOGO.width};
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${FOOTER.background};
  font-size: ${FOOTER.fontSize};
  text-align: center;
  height: 101px;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;

    > span {
      margin-right: ${spacing.spacer4};
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    justify-content: flex-start;
    padding-left: ${FOOTER.paddingXDesktop};
  }
`;