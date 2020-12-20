import React from 'react';
import styled from 'styled-components';
import { Quiz as QuizModel } from 'models';
import Round from './Round';


interface IProps {
  data: QuizModel,
}


const Quiz:React.FC<IProps> = ({ data }) => (
  <QuizOuter>
    {data.name}
    {data.rounds.map((round) => (
      <Round key={round.name} data={round} />
    ))}
  </QuizOuter>
);
export default Quiz;


const QuizOuter = styled.div``;
