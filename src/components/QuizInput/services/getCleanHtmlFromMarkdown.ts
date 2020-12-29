import { parse as markdown } from 'marked';
import DOMPurify from 'dompurify';

export function getCleanHtmlFromMarkdown(input: string): string {
  const resultDangerous = markdown(input);
  const resultSafe = DOMPurify.sanitize(resultDangerous);
  return resultSafe;
}
