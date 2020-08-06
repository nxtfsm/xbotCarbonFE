// contentSectionLoader.js
//import { templateBuilder } from './templateLoader'

export const initContentSection = () => {
  let mainContainer = document.getElementById('mainContentContainer'),
      sectionTemplate = document.getElementById('main-content-section'),
      tabTemplate = document.getElementById('tabbed-content-window'),
      sectionClone = sectionTemplate.content.cloneNode(true),
      tabClone = tabTemplate.content.cloneNode(true),
      contentWindow = sectionClone.querySelector('.contentWindow');

      contentWindow.appendChild(tabClone)
      mainContainer.appendChild(sectionClone)

      //console.log(tabTemplate.content.querySelectorAll('slot'))

}
