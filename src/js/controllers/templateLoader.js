// templateLoader.js
import { parseElementFromHTML, insertElementInHead } from "../helperFuncs"

export const loadTemplatesFromURLs = () => {
  let urls = [/*"./templates/topLevelSectionTile.html",*/ "./templates/tabbedContentWindow.html", "./templates/mainContentSection.html", "./templates/tabListHead.html", "./templates/tabContentPanel.html", "./templates/multiselect.html", "./templates/collapsingTileTabPanel.html"];
  for (var i = 0; i < urls.length; i++)
    { parseElementFromHTML(urls[i]).then(nodeList => {
      for (const node of nodeList) { insertElementInHead(node) } }) }
  }

export const initClone = (forId, templateId) => {
        let template = document.getElementById(templateId),
            clone = template.content.cloneNode(true),
            topElem = clone.children[0];

        topElem.id = `${forId}-${templateId}`
        topElem.dataset.target = forId
        return clone
  }

/*export const componentBuilder = () => {
  const templates = document.querySelectorAll('template.shadow');
  for (let template of templates) {
    console.log(template)
    defineComponentFromTemplate(template.id)
  }
}

const defineComponentFromTemplate = templateId => {
  customElements.define(templateId,
    class extends HTMLElement {
      constructor() {
        super();
        const template = document.getElementById(templateId).content;
        const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.cloneNode(true));
      }

      connectedCallback() {
        let template = document.getElementById(templateId);
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

              //node = document.importNode(template.content, true);
              //this.innerHtml = template.content
              //shadowRoot.appendChild(node)

      }
    }
  )
}*/
