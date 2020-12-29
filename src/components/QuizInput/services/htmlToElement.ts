export function htmlToElement(html: string): DocumentFragment {
  const template = document.createElement('template');
  const trimmedHtmlString = html.trim();
  template.innerHTML = trimmedHtmlString;
  return template.content;
}
