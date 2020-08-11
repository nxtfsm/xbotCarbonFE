// registerEvents.js
import { fleetToTiles, displayMainContent, switchTabs } from './animations/animations'
import { loadContentWindowInRow } from './elementInitializers'

const topTilesRow = document.querySelector(".topTilesRow"),
      mainContentRow = document.querySelector(".mainContentRow"),
      fleetContainer = document.querySelector("#animFleetContainer");

export const registerEvents = (topLevelSections) => {
  const headerTiles = gsap.utils.toArray(topTilesRow.querySelectorAll(".tlhTile"));

  fleetContainer.addEventListener('click', function()
    { fleetToTiles(this, headerTiles) })

  mainContentRow.addEventListener('click', function(e) {
    if (e.target.classList.contains('bx--tabs__nav-link')) { switchTabs(e.target) } })

  for (let tile of headerTiles) {
    tile.addEventListener('click', function() {
      if (!this.classList.contains('active')) {
      let caller = this,
          targetId = this.dataset.target,
          sectionToLoad = topLevelSections.find(section => section.mainId == targetId);
      loadContentWindowInRow(sectionToLoad, mainContentRow)
          .then( function() { displayMainContent(targetId) }) }
        })}
}
