import React from 'react';
import styled from 'styled-components';
import { Round as RoundModel } from 'models';
import Question from './Question';


interface Props {
  data: RoundModel,
}
const defaultProps = {};


const Round:React.FC<Props> = ({ data }) => (
  <RoundOuter>
    <Title>{data.name}</Title>
    {data.questions.map((question) => (
      <Question key={question.questionText} data={question} />
    ))}
  </RoundOuter>
);
Round.defaultProps = defaultProps;
export default Round;


const RoundOuter = styled.div``;
const Title = styled.p`
  font-weight: bold;
`;
