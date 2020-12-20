import React from 'react';
import styled from 'styled-components/macro';
import Container from 'components/Container';
import Quiz from 'components/Quiz';
import data from './assets/data/dummyData.json';
import GlobalStyles from './GlobalStyles';
import 'normalize.css';

// class myData implements QuizType {

// }

const App:React.FC = () => (
  <AppWrapper>
    <GlobalStyles />
    <Container>
      <Quiz data={data} />
    </Container>
  </AppWrapper>
);

export default App;

const AppWrapper = styled.div``;
