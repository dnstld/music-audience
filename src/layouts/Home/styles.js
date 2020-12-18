import styled from 'styled-components';

import artistPhotography from '../../assets/images/artist-photography.jpg';

import {
  breakpoints,
  spacing,
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

export const RegisterColumn = styled.div``;