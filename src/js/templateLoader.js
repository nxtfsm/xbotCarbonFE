// templateLoader.js
import { parseElementFromHTML, insertElementInHead } from "./helperFuncs"

export const loadTemplatesFromURLs = () => {
  let urls = [/*"./templates/topLevelSectionTile.html",*/ "./templates/tabbedContentWindow.html", "./templates/mainContentSection.html", "./templates/tabListHead.html", "./templates/tabContentPanel.html"];
  for (var i = 0; i < urls.length; i++)
    { parseElementFromHTML(urls[i]).then(elem => { insertElementInHead(elem) }) }
  }

/*export const loadTemplatesFromURLs = () => {
  return new Promise(
    function(onCompletion) {
  let urls = ["./templates/topLevelSectionTile.html", "./templates/tabbedContentWindow.html", "./templates/mainContentSection.html", "./templates/tabListHead.html", "./templates/tabContentPanel.html"];
  for (let i = 0; i < urls.length; i++)
    { parseElementFromHTML(urls[i]).then(elem => { insertElementInHead(elem) }) }
    console.log(document.querySelectorAll('template'))
  })
}*/
