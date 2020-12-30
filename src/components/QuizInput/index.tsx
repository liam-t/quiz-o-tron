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


const QuizInput:React.FC<Props> = ({ onChange: onChangeProp }) => {
  const [textAreaContent, setTextAreaContent] = React.useState('boo');
  React.useEffect(() => {
    async function fetchData() {
      const res = await window.fetch(markdownTest);
      const text = await res.text();
      setTextAreaContent(text);
    }
    void fetchData(); // eslint-disable-line no-void
  }, []);

  // todo: error handling and user feedback
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const htmlString = getCleanHtmlFromMarkdown(textAreaContent);
    const htmlElement = htmlToElement(htmlString);
    const theQuiz = getQuizJson(htmlElement);
    onChangeProp(theQuiz);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target;
    setTextAreaContent(value);
  };

  return (
    <QuizInputOuter>
      <Form forwardedAs="form" onSubmit={handleSubmit}>
        {/* todo: syntax highlighting */}
        <Textarea
          forwardedAs="textarea"
          autoComplete="off"
          autoFocus
          cols={40}
          rows={20}
          value={textAreaContent}
          onChange={handleTextareaChange}
        />
        <SaveBtnWrap>
          <SaveBtn type="submit" value="Save" />
        </SaveBtnWrap>
      </Form>
    </QuizInputOuter>
  );
};
export default QuizInput;


const QuizInputOuter = styled(FlexHeightElement)`
  box-sizing: border-box;
  padding: 20px;
`;
const Form = styled(FlexHeightElement)``;
const Textarea = styled(FlexHeightElement)`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
`;
const SaveBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const SaveBtn = styled.input`
  display: block;
  padding: 0.4em 1em;
  font-size: 1.4rem;
`;
