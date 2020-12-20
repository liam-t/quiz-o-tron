import React from 'react';
import styled from 'styled-components';
import { Question as QuestionModel } from 'models';


interface Props {
  data: QuestionModel,
}
const defaultProps = {};


const Question:React.FC<Props> = ({ data }) => (
  <QuestionOuter>
    Q: {data.questionText}
    <Img src={data.imageUrl} />
    A: {data.answerText}
    <hr />
  </QuestionOuter>
);
Question.defaultProps = defaultProps;
export default Question;


const QuestionOuter = styled.div``;
const Img = styled.img`
  display: block;
`;
