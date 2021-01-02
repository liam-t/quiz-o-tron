import React from 'react';
import styled from 'styled-components/macro';
import Container from 'components/Container';
import Quiz from 'components/Quiz';
import FlexHeightElement from 'components/FlexHeightElement';
import QuizInput from 'components/QuizInput';
import Nav from 'components/Nav';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Quiz as QuizModel } from 'models';
import data from './assets/data/dummyData.json';
import GlobalStyles from './GlobalStyles';
import 'normalize.css';


const App:React.FC = () => {
  const [quizData, setQuizData] = React.useState<QuizModel>(data);
  const handleQuizInputChange = (dataReturn: QuizModel) => setQuizData(dataReturn);
  const memoizedHandleQuizInputChange = React.useCallback(handleQuizInputChange, []);
  return (
    <Router>
      <AppWrapper>
        <GlobalStyles />
        <Nav />
        <Switch>
          <Route exact path="/input">
            <QuizInput onChange={memoizedHandleQuizInputChange} />
          </Route>
          <Route path={['/slide/:activeSlideIndex', '/']}>
            <Container flexHeight>
              <Quiz data={quizData} />
            </Container>
          </Route>
        </Switch>
      </AppWrapper>
    </Router>
  );
};

export default App;

const AppWrapper = styled(FlexHeightElement)``;
