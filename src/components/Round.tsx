import React from 'react';
import styled from 'styled-components/macro';
import { Round as RoundModel } from 'models';
import Question from 'components/Question';
import RoundTitleScreen from 'components/RoundTitleScreen';
import FlexHeightElement from 'components/FlexHeightElement';

interface Props {
  data: RoundModel,
  // onRoundComplete: () => void,
}
const defaultProps = {};


const Round:React.FC<Props> = ({
  data,
  // onRoundComplete,
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = React.useState(0);
  const [showRoundTitleScreen, setShowRoundTitleScreen] = React.useState(true);
  const activeQuestionData = data.questions[activeQuestionIndex];
  // const handleRoundComplete = () => onRoundComplete();
  const handleTitleScreenClick = () => setShowRoundTitleScreen(false);
  const handleRoundClick = () => {
    const isFinalQuestion = activeQuestionIndex === (data.questions.length - 1);
    // if (isFinalQuestion) handleRoundComplete();
    // else {
    setActiveQuestionIndex((oldVal) => oldVal + 1);
    // }
  };

  if (showRoundTitleScreen) {
    return (
      <RoundTitleScreen
        title={data.name}
        description={data.description}
        image={data.imageUrl}
        onClick={handleTitleScreenClick}
      />
    );
  } else {
    return (
      <RoundOuter onClick={handleRoundClick}>
        <Question key={activeQuestionData.questionText} data={activeQuestionData} />
      </RoundOuter>
    );
  }
};
Round.defaultProps = defaultProps;
export default Round;


const RoundOuter = styled(FlexHeightElement)``;
