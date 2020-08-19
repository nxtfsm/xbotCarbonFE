// elementInitializers.js
import { topTilesRow, mainContentRow } from '../../index'

export const loadHeaderTilesRow = (sections) => {
  const withOffset = true,
        htmlTiles = sections.map(section => { return section.headerTileHTML });

  if (withOffset) { setOffsetForRow(htmlTiles) }

  for (var i = 0; i < htmlTiles.length; i++)
    { topTilesRow.appendChild(htmlTiles[i]) }
}

export const loadContentRow = (section) => {
  return new Promise((onResolve) => {
    mainContentRow.append( section.getMainContentWindowHTML() )
    //mainContentRow.append(makeSectionHTML(section))
    return onResolve() })
}

//const makeSectionHTML = (section) => { return section.makeContentWindowHTML() }

const setOffsetForRow = columnElements => {
  const firstBox = columnElements[0].children[0],
        pseudoClasses = ["bx--offset-lg-1", "bx--offset-md-1", "bx--offset-sm-0"];

  appendPseudoClassesToElem(firstBox, pseudoClasses)
}

const appendPseudoClassesToElem = (elem, listOfClasses) => {
  for (let c of listOfClasses) { elem.classList.add(c) }
}
