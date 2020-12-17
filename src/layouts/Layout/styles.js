import styled from 'styled-components';

const variables = {
  containerMaxWidth: '1024px',
};

export const Container = styled.div`
  width: 100%;
  max-width: ${variables.containerMaxWidth};
  margin: 0 auto;
`;