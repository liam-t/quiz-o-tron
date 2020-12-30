import React from 'react';
import styled from 'styled-components/macro';
import {
  Quiz as QuizModel,
  Round as RoundModel,
  Question as QuestionModel,
  Slide as SlideModel,
} from 'models';
import FlexHeightElement from 'components/FlexHeightElement';
import Slide from 'components/Slide';
import KeyboardHandler from 'components/KeyboardHandler';
import QuizProgressOverlays from 'components/QuizProgressOverlays';
import { useParams, useHistory } from 'react-router-dom';

interface Props {
  data: QuizModel,
}


const Quiz:React.FC<Props> = ({ data }) => {
  const { activeSlideIndex: activeSlideIndexRaw = '0' } = useParams<{ activeSlideIndex: string }>();
  const activeSlideIndex = Number(activeSlideIndexRaw);
  const routerHistory = useHistory();

  function goNextSlide() {
    const isLastSlide = activeSlideIndex + 1 === allSlides.length;
    if (!isLastSlide) routerHistory.push(`/slide/${activeSlideIndex + 1}`);
  }

  function goPrevSlide() {
    const isFirstSlide = activeSlideIndex === 0;
    if (!isFirstSlide) routerHistory.push(`/slide/${activeSlideIndex - 1}`);
  }

  const slideReducer = (slides: SlideModel[], round: RoundModel): SlideModel[] => {
    slides.push(new SlideModel(round.name, 'round', round.description, round.imageUrl));
    round.questions.forEach((question: QuestionModel, i) => {
      slides.push(new SlideModel(`Question ${i + 1}:`, 'question', question.questionText, question.imageUrl));
      slides.push(new SlideModel('Answer:', 'answer', question.answerText, question.imageUrl));
    });
    return slides;
  };

  const firstSlide = new SlideModel(data.name, 'start', undefined, data.imageUrl);
  const lastSlide = new SlideModel(
    'Quiz complete!',
    'end',
    'You live to fight another day comrades, well done!',
    'https://picsum.photos/seed/cNmVRnREljYWb/1200/1200',
  );
  const roundSlides = data.rounds.reduce(slideReducer, []);
  const allSlides = [
    firstSlide,
    ...roundSlides,
    lastSlide,
  ];

  const activeSlideData = allSlides[activeSlideIndex];
  const handleSlideClick = () => goNextSlide();
  const handleKeyboardKeyDown = (key: string): void => {
    type FuncType = () => void;
    const actionMap: { [key: string]: FuncType } = {
      ' ': goNextSlide,
      Enter: goNextSlide,
      ArrowRight: goNextSlide,
      ArrowDown: goNextSlide,
      ArrowLeft: goPrevSlide,
      ArrowUp: goPrevSlide,
      Backspace: goPrevSlide,
    };

    if (key in actionMap) actionMap[key]();
  };

  return (
    <QuizOuter>
      <KeyboardHandler onKeyDown={handleKeyboardKeyDown} />
      <Slide
        title={activeSlideData.title}
        copy={activeSlideData.copy}
        imageUrl={activeSlideData.imageUrl}
        slideType={activeSlideData.slideType}
        onClick={handleSlideClick}
      />
      <QuizProgressOverlays
        activeSlideIndex={activeSlideIndex}
        slides={allSlides}
      />
    </QuizOuter>
  );
};
export default Quiz;


const QuizOuter = styled(FlexHeightElement)`
  position: relative;
`;
