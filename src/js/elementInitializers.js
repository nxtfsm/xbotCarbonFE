// elementInitializers.js
export const loadHeaderTilesInGrid = (sections, container) => {
  let withOffset = true,
      tiles = createSectionHeadTiles(sections, withOffset);
  for (var i = 0; i < tiles.length; i++) { container.appendChild(tiles[i]) }
}

const createSectionHeadTiles = (sections, withOffset) => {
  let tiles = sections.map( section => { return initSectionHeadTile(section) })
  if (withOffset) {
    const firstCol = tiles[0].children[0],
          pseudoClasses = ["bx--offset-lg-1", "bx--offset-md-1", "bx--offset-sm-0"];
    for (let c of pseudoClasses) { firstCol.classList.add(c) } }
  return tiles
}

const initSectionHeadTile = section => {
  let tileTemplate = document.getElementById("top-level-section-tile"),
      clone = tileTemplate.content.cloneNode(true),
      topCol = clone.children[0],
      tile = clone.querySelector('a.bx--tile'),
      label = tile.querySelector('.label');

      topCol.id = `${section.mainId}-col`
      tile.dataset.target=section.mainId
      label.innerHTML = section.displayTitle
      return clone
}
