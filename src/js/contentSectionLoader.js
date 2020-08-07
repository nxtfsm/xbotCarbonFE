// contentSectionLoader.js
export const oldInitContentSection = () => {
  let mainContainer = document.getElementById('mainContentContainer'),
      sectionTemplate = document.getElementById('main-content-section'),
      tabTemplate = document.getElementById('tabbed-content-window'),
      sectionClone = sectionTemplate.content.cloneNode(true),
      tabClone = tabTemplate.content.cloneNode(true),
      contentWindow = sectionClone.querySelector('.contentWindow');

      contentWindow.appendChild(tabClone)
      mainContainer.appendChild(sectionClone)


}
