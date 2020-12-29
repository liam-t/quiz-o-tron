import React from 'react';
import styled from 'styled-components/macro';
import FlexHeightElement from 'components/FlexHeightElement';
import { Quiz as QuizModel } from 'models';
import markdownTest from 'assets/quizzes/quiz1.md';
import {
  getCleanHtmlFromMarkdown,
  htmlToElement,
  getQuizJson,
} from './services';


interface Props {
  onChange: (dataReturn: QuizModel) => void,
}


const QuizInput:React.FC<Props> = ({ onChange }) => {
  React.useEffect(() => {
    async function fetchData() {
      const res = await window.fetch(markdownTest);
      const text = await res.text();
      const htmlString = getCleanHtmlFromMarkdown(text);
      const htmlElement = htmlToElement(htmlString);
      const theQuiz = getQuizJson(htmlElement);
      onChange(theQuiz);
    }
    void fetchData(); // eslint-disable-line no-void
  }, [onChange]);

  return (
    <QuizInputOuter>QuizInput - UI pending</QuizInputOuter>
  );
};
export default QuizInput;


const QuizInputOuter = styled(FlexHeightElement)`
  box-sizing: border-box;
  padding: 20px;
  background-color: #ccefff;
`;
