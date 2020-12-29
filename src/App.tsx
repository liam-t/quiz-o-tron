import React from 'react';
import styled from 'styled-components/macro';
import Container from 'components/Container';
import Quiz from 'components/Quiz';
import FlexHeightElement from 'components/FlexHeightElement';
import QuizInput from 'components/QuizInput';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
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
        <Container flexHeight>
          <Link to="/">home</Link>
          <Link to="/input">input</Link>
          <Switch>
            <Route exact path="/input">
              <QuizInput onChange={memoizedHandleQuizInputChange} />
            </Route>
            <Route>
              <Quiz data={quizData} />
            </Route>
          </Switch>
        </Container>
      </AppWrapper>
    </Router>
  );
};

export default App;

const AppWrapper = styled(FlexHeightElement)``;
