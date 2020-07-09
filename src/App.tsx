import React from 'react';
import Table from 'components/Table';
import data from 'data/parsed/starwars.json';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import 'normalize.css';


const App:React.FC = () => (
  <AppWrapper>
    <GlobalStyles />
    <Table data={data} />
  </AppWrapper>
);

export default App;

const AppWrapper = styled.div``;
