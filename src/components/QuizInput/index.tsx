import React from 'react';
import styled from 'styled-components/macro';
import FlexHeightElement from 'components/FlexHeightElement';
import { Quiz as QuizModel } from 'models';
import markdownTest from 'assets/quizzes/quiz1.md';
import MDEditor from '@uiw/react-md-editor';
import { withResizeDetector } from 'react-resize-detector';
import {
  getCleanHtmlFromMarkdown,
  htmlToElement,
  getQuizJson,
} from './services';


interface Props {
  onChange: (dataReturn: QuizModel) => void,
  height?: number,
  targetRef?: React.Ref<HTMLDivElement>,
}


const QuizInput:React.FC<Props> = ({
  onChange: onChangeProp,
  height,
  targetRef,
}) => {
  const [textAreaContent, setTextAreaContent] = React.useState('');
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

  const handleTextareaChange = (val: string | undefined): void => {
    setTextAreaContent(val || '');
  };

  return (
    <QuizInputOuter>
      <Form forwardedAs="form" onSubmit={handleSubmit}>
        <EditorWrapOuter>
          <EditorWrap ref={targetRef}>
            <MDEditorStyled
              autoFocus
              value={textAreaContent}
              onChange={handleTextareaChange}
              height={height}
              visiableDragbar={false}
              preview="edit"
            />
          </EditorWrap>
        </EditorWrapOuter>
        <SaveBtnWrap>
          <SaveBtn type="submit" value="Save" />
        </SaveBtnWrap>
      </Form>
    </QuizInputOuter>
  );
};
export default withResizeDetector<Props>(QuizInput);


const QuizInputOuter = styled(FlexHeightElement)`
  box-sizing: border-box;
  padding: 20px;
  background-color: #eee;
  @media (min-width: 400px) {
    padding: 40px;
  }
`;
const Form = styled(FlexHeightElement)``;
const EditorWrapOuter = styled(FlexHeightElement)`
  position: relative;
  margin-bottom: 10px;
`;
const EditorWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MDEditorStyled = styled(MDEditor)`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;
const SaveBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const SaveBtn = styled.input`
  display: block;
  padding: 0.4em 1em;
  font-size: 1.4rem;
  /* background-color: skyblue; */
  background-color: #fff;
  font-weight: bold;
  color: #444;
  border: 1px solid #aaa;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;
