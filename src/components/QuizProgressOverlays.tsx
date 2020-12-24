import React from 'react';
import styled from 'styled-components/macro';
import { Slide as SlideModel } from 'models';


type TallyObj = { round: number, question: number };
interface Props {
  activeSlideIndex: number,
  slides: SlideModel[],
}


const QuizProgressOverlays:React.FC<Props> = ({ activeSlideIndex, slides }) => {
  const reducer = (acc: TallyObj, item: SlideModel): TallyObj => {
    if (item.slideType === 'round') {
      acc.round += 1;
      acc.question = 0;
    } else if (item.slideType === 'question') {
      acc.question += 1;
    }
    return acc;
  };
  const tally = slides.slice(0, activeSlideIndex + 1).reduce(reducer, {
    round: 0,
    question: 0,
  });

  const currentSlideType = slides[activeSlideIndex].slideType;
  const showOverlays = currentSlideType === 'answer' || currentSlideType === 'question';
  if (!showOverlays) return null;

  return (
    <QuizProgressOverlaysOuter>
      <QuestionNumber>Question {tally.question}</QuestionNumber>
      <RoundNumber>Round {tally.round}</RoundNumber>
    </QuizProgressOverlaysOuter>
  );
};
export default QuizProgressOverlays;


const QuizProgressOverlaysOuter = styled.div`
  color: white;
`;
const margin = 10;
const QuestionNumber = styled.div`
  position: absolute;
  top: ${margin}px;
  left: ${margin}px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const RoundNumber = styled(QuestionNumber)`
  top: auto;
  left: auto;
  bottom: ${margin}px;
  right: ${margin}px;
`;
