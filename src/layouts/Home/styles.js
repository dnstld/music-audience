import styled from 'styled-components';

import artistPhotography from '../../assets/images/artist-photography.jpg';

import {
  breakpoints,
  spacing,
  gradients,
} from '../../designTokens';

const REGISTER_COLUMN = {
  widthDesktop: '638px',
};

const ARTIST_NAME = {
  width: '208px',
  widthTablet: '338px',
  widthDesktop: '344px',
  bottom: 0,
  bottomTabled: spacing.spacer13,
};

const REGISTER_SECTION = {
  background: gradients.primary,
  padding: `${spacing.spacer50} ${spacing.spacer24}`,
  paddingDesktop: `${spacing.spacer50} ${spacing.spacer98}`,
};

const REGISTER_CONTENT = {
  maxWidth: '336px',
};

const REGISTER_HEADING = {
  marginBottom: spacing.spacer16,
  maxWidth: '395px',
};

export const Container = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    display: grid;
    grid-template-columns: ${REGISTER_COLUMN.widthDesktop} 1fr;
  }
`;

export const Cover = styled.div`
  position: relative;
  background: url(${artistPhotography}) no-repeat center -25px;
  background-size: cover;
  width: 100%;
  height: 0;
  padding-top: 56.25%;

  @media (min-width: ${breakpoints.md}) {
    background-position: center -45px;
  }
  @media (min-width: ${breakpoints.lg}) {
    order: 1;
    background-position: center;
    height: auto;
  }
`;

export const ArtistName = styled.img`
  width: ${ARTIST_NAME.width};
  position: absolute;
  bottom: ${ARTIST_NAME.bottom};
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: ${breakpoints.md}) {
    width: ${ARTIST_NAME.widthTablet};
    bottom: ${ARTIST_NAME.bottomTablet};
  }
  @media (min-width: ${breakpoints.lg}) {
    width: ${ARTIST_NAME.widthDesktop};
  }
`;

export const RegisterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RegisterSection = styled.section`
  width: 100%;
  background: ${REGISTER_SECTION.background};
  padding: ${REGISTER_SECTION.padding};
  
  @media (min-width: ${breakpoints.lg}) {
    flex: 1;
    padding: ${REGISTER_SECTION.paddingDesktop};
  }
`;

export const RegisterContent = styled.div`
  width: 100%;
  max-width: ${REGISTER_CONTENT.maxWidth};
  margin: 0 auto;

  @media (min-width: ${breakpoints.lg}) {
    max-width: none;
  }
`;

export const RegisterHeading = styled.img`
  width: 100%;
  margin-bottom: ${REGISTER_HEADING.marginBottom};

  @media (min-width: ${breakpoints.lg}) {
    max-width: ${REGISTER_HEADING.maxWidth};
  }
`;

export const Ad = styled.img`
  width: 100%;
`;