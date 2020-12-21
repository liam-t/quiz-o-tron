import React from 'react';
import styled from 'styled-components';
import { Quiz as QuizModel } from 'models';
import FlexHeightElement from 'components/FlexHeightElement';
import Round from './Round';


interface IProps {
  data: QuizModel,
}


const Quiz:React.FC<IProps> = ({ data }) => {
  const [activeRoundIndex, setActiveRoundIndex] = React.useState(0);
  const [quizComplete, setQuizComplete] = React.useState(false);
  const activeRoundData = data.rounds[activeRoundIndex];
  const handleRoundComplete = () => {
    const isFinalRound = activeRoundIndex === (data.rounds.length - 1);
    if (isFinalRound) setQuizComplete(true);
    else setActiveRoundIndex((oldVal) => oldVal + 1);
  };
  if (quizComplete) return <>quiz complete!</>;
  return (
    <QuizOuter>
      {/* {data.name} */}
      <Round
        key={activeRoundData.name}
        data={activeRoundData}
        onRoundComplete={handleRoundComplete}
      />
    </QuizOuter>
  );
};
export default Quiz;


const QuizOuter = styled(FlexHeightElement)``;
