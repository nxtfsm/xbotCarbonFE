// registerEvents.js
import { expandFleetToTiles } from './fleetAnimations'
import { sectionToggler } from './topLevelSectionAnimations'
import { loadContentWindowInGrid } from './elementInitializers'
import { switchTabPanels } from './tabPanelAnimations'

const topTilesRow = document.querySelector(".topTilesRow"),
      mainContentRow = document.querySelector(".mainContentRow"),
      fleetContainer = document.querySelector("#animFleetContainer");

export const registerEvents = (topLevelSections) => {
const headerTiles = gsap.utils.toArray(topTilesRow.querySelectorAll(".tlhTile"));

  fleetContainer.addEventListener('click', function()
    { expandFleetToTiles(this, headerTiles) })

  topTilesRow.addEventListener('click', function(e) {
    
    if (e.target.classList.contains('tlhTile')) {

      let caller = e.target,
          targetId = caller.dataset.target,
          sectionToLoad = topLevelSections.find(section => section.mainId == targetId);
      sectionToggler(caller, headerTiles, topTilesRow, mainContentRow)
      loadContentWindowInGrid(sectionToLoad, mainContentRow)
    }
  })

  mainContentRow.addEventListener('click', function(e) {
      if (e.target.classList.contains('bx--tabs__nav-link')) {
        switchTabPanels(e.target) } }) }
