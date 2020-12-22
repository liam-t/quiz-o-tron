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

interface Props {
  data: QuizModel,
}


const Quiz:React.FC<Props> = ({ data }) => {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
  const [quizComplete, setQuizComplete] = React.useState(false);

  function goNextSlide() {
    const isLastSlide = activeSlideIndex + 1 === allSlides.length;
    if (!isLastSlide) setActiveSlideIndex((oldIndex) => oldIndex + 1);
    else setQuizComplete(true);
  }

  function goPrevSlide() {
    const isFirstSlide = activeSlideIndex === 0;
    if (!isFirstSlide) setActiveSlideIndex((oldIndex) => oldIndex - 1);
  }

  const slideReducer = (slides: SlideModel[], round: RoundModel): SlideModel[] => {
    slides.push(new SlideModel(round.name, round.description, round.imageUrl));
    round.questions.forEach((question: QuestionModel, i) => {
      slides.push(new SlideModel(`Question ${i + 1}:`, question.questionText, question.imageUrl));
      slides.push(new SlideModel('Answer:', question.answerText, question.imageUrl));
    });
    return slides;
  };
  const firstSlide = new SlideModel(data.name, undefined, data.imageUrl);
  const allSlides = data.rounds.reduce(slideReducer, [firstSlide]);
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

    if (key in actionMap) {
      if (quizComplete && actionMap[key].name === 'goPrevSlide') {
        setQuizComplete(false);
      } else {
        actionMap[key]();
      }
    }
  };

  return (
    <QuizOuter>
      <KeyboardHandler onKeyDown={handleKeyboardKeyDown} />
      {!quizComplete ? (
        <Slide
          title={activeSlideData.title}
          copy={activeSlideData.copy}
          image={activeSlideData.imageUrl}
          onClick={handleSlideClick}
        />
      ) : (
        <Slide
          title="Quiz complete!"
          copy="You live to fight another day comrades, well done!"
          image="https://picsum.photos/seed/cNmVRnREljYWb/1200/1200"
          onClick={handleSlideClick}
        />
      )}
    </QuizOuter>
  );
};
export default Quiz;


const QuizOuter = styled(FlexHeightElement)``;
