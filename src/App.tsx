import React from 'react';
import StarWarsTable from 'components/StarWarsTable';
import data from 'data/parsed/starwars.json';
import styled from 'styled-components/macro';
import Container from 'components/Container';
import GlobalStyles from './GlobalStyles';
import 'normalize.css';


const App:React.FC = () => (
  <AppWrapper>
    <GlobalStyles />
    <Container>
      <StarWarsTable data={data} />
    </Container>
  </AppWrapper>
);

export default App;

const AppWrapper = styled.div``;
