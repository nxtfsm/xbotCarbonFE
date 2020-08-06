// templateLoader.js
import { parseElementFromHTML, insertElementInHead } from "./helperFuncs"

export const loadTemplatesFromURLs = () => {
  let links = ["./templates/tabbedContentWindow.html", "./templates/mainContentSection.html"];
  for (let link of links)
    { parseElementFromHTML(link).then(elem => { insertElementInHead(elem) }) }
}

/*export const templateBuilder = fromTemplate => {
  console.log('firing for: ' + fromTemplate)
  customElements.define(fromTemplate.id,
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(fromTemplate.id);
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(template.cloneNode(true)); }
    });
}*/
