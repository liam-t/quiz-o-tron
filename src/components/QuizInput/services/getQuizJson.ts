import {
  Round as RoundModel,
  Question as QuestionModel,
  Quiz as QuizModel,
} from 'models';


function getRoundFragmentsArray(docFrag: DocumentFragment): DocumentFragment[] {
  const fragmentArray: DocumentFragment[] = [];
  docFrag.childNodes.forEach((node) => {
    if (node.nodeType !== 1) return;
    if (node.nodeName === 'H2') fragmentArray.push(document.createDocumentFragment());
    if (!fragmentArray.length) return;
    const nodeToAppend = node.firstChild?.nodeName === 'IMG' ? node.firstChild : node;
    fragmentArray[fragmentArray.length - 1].appendChild(nodeToAppend);
  });
  return fragmentArray;
}


function getQuestionsFromLiEls(els: NodeListOf<HTMLLIElement>): QuestionModel[] {
  const elsArray = Array.from(els);
  return elsArray.map((el: HTMLLIElement): QuestionModel => {
    const answerNode = el.querySelector('strong');
    const answerText = answerNode?.innerText.trim() || '';
    el.removeChild(answerNode || document.createElement('strong'));
    const questionText = el.innerText.trim() || '';
    const quesionImageUrl = el.querySelector('img')?.src;
    return new QuestionModel(questionText, answerText, quesionImageUrl);
  });
}


export function getQuizJson(docFrag: DocumentFragment): QuizModel {
  const roundFragmentsArray = getRoundFragmentsArray(docFrag);
  const quizName = docFrag.querySelector('h1')?.innerText || '';
  const quizImage = docFrag.querySelector('img')?.src || '';
  const rounds = roundFragmentsArray.map((roundDocFrag: DocumentFragment) => (
    new RoundModel(
      roundDocFrag.querySelector('h2')?.innerText || '',
      getQuestionsFromLiEls(roundDocFrag.querySelectorAll('li')),
      roundDocFrag.querySelector('h3')?.innerText || '',
      roundDocFrag.querySelector('img')?.src,
    )
  ));
  return new QuizModel(quizName, quizImage, rounds);
}
