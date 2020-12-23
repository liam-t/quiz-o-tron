import React from 'react';
import styled from 'styled-components/macro';
import { Slide as SlideModel } from 'models';


interface Props {
  activeSlideIndex: number,
  slides: SlideModel[],
  quizComplete: boolean,
}


const QuizProgressOverlays:React.FC<Props> = ({ activeSlideIndex, slides, quizComplete }) => {
  const currentSlide = null;
  return (
    <QuizProgressOverlaysOuter>
      <QuestionNumber>Question {activeSlideIndex + 1}</QuestionNumber>
    </QuizProgressOverlaysOuter>
  );
};
export default QuizProgressOverlays;


const QuizProgressOverlaysOuter = styled.div`
  color: white;
`;
const QuestionNumber = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;
