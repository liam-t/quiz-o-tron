import React from 'react';
import styled from 'styled-components/macro';
import Container from 'components/Container';
import GlobalStyles from './GlobalStyles';
import 'normalize.css';


const App:React.FC = () => (
  <AppWrapper>
    <GlobalStyles />
    <Container>
      hi
    </Container>
  </AppWrapper>
);

export default App;

const AppWrapper = styled.div``;
