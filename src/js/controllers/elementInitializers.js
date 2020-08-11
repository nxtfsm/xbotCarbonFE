// elementInitializers.js
export const loadHeaderTilesRow = (sections, container) => {
  const withOffset = true,
        tiles = createSectionHeadTiles(sections);

  if (withOffset) {
      const firstCol = tiles[0].children[0],
          pseudoClasses = ["bx--offset-lg-1", "bx--offset-md-1", "bx--offset-sm-0"];
      for (let c of pseudoClasses) { firstCol.classList.add(c) } }

  for (var i = 0; i < tiles.length; i++)
    { container.appendChild(tiles[i]) }
}

export const loadContentRow = (section, container) => {
  return new Promise((onResolve) => {
    container.append(makeSectionHTML(section))
    return onResolve() })
}

const makeSectionHTML = section => { return section.makeContentWindowHTML() }

const createSectionHeadTiles = (sections) => {
  return sections.map( section => { return section.makeHeaderTileHTML() }) }