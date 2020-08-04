// registerEvents.js
import { sectionToggler } from './topLevelSectionAnimations'
import { fleetClickHandler } from './fleetAnimations'
import { tabPanelToggler } from './contentTabPanelAnimations'
import { loadHTMLintoElement } from './helperFuncs'

const topTilesRow = document.querySelector(".topTilesRow"),
      mainContent = document.querySelector(".mainContentRow"),
      fleetContainer = document.querySelector("#animFleetContainer");

export const registerEvents = () => {
const headerTiles = gsap.utils.toArray(topTilesRow.querySelectorAll(".tlhTile")),
      tileLabels = gsap.utils.toArray(topTilesRow.querySelectorAll(".label")),
      tileChevrons = gsap.utils.toArray(topTilesRow.querySelectorAll(".iconContainer")),
      shipWraps = gsap.utils.toArray(fleetContainer.querySelectorAll(".svgWrapper")),
      tabLinks = gsap.utils.toArray(mainContent.querySelectorAll(".bx--tabs__nav-item")),
      tabPanels = gsap.utils.toArray(mainContent.querySelectorAll("[role='tabpanel']"));

  for (const tile of headerTiles) {
    tile.addEventListener('click', function() {
      sectionToggler(this, headerTiles, topTilesRow, mainContent)
      loadHTMLintoElement(this, mainContent)
    })
  }

  for (const wrapper of shipWraps) {
    wrapper.addEventListener('click', function() {
      fleetClickHandler(fleetContainer, headerTiles)
    })
  }

  for (const tabLink of tabLinks) {
    tabLink.addEventListener('click', function() {
      tabPanelToggler(this, tabLinks, tabPanels)
    })
  }

  mainContent.addEventListener('click', function(e) {
    if (e.target.classList.contains('bx--tabs__nav-link')) {
      tabPanelToggler(e.target, tabLinks, tabPanels) } })
}
