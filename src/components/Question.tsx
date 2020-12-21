import React from 'react';
import styled from 'styled-components';
import { Question as QuestionModel } from 'models';


interface Props {
  data: QuestionModel,
}
const defaultProps = {};


const Question:React.FC<Props> = ({ data }) => {
  const [answerIsVisible, setAnswerIsVisible] = React.useState(false);
  return (
    <QuestionOuter>
      Q: {data.questionText}
      {data.imageUrl && <Img src={data.imageUrl} />}
      {answerIsVisible && `A: ${data.answerText}`}
      <hr />
    </QuestionOuter>
  );
};
Question.defaultProps = defaultProps;
export default Question;


const QuestionOuter = styled.div``;
const Img = styled.img`
  display: block;
`;
