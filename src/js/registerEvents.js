// registerEvents.js
import { sectionToggler } from './topLevelSectionAnimations'
import { fleetClickHandler } from './fleetAnimations'
import { tabPanelToggler } from './contentTabPanelAnimations'

export const registerEvents = () => {
const topTilesRow = document.querySelector(".topTilesRow"),
      mainContentRow = document.querySelector(".mainContentRow"),
      fleetContainer = document.querySelector("#animFleetContainer"),
      headerTiles = gsap.utils.toArray(topTilesRow.querySelectorAll(".tlhTile")),
      tileLabels = gsap.utils.toArray(topTilesRow.querySelectorAll(".label")),
      tileChevrons = gsap.utils.toArray(topTilesRow.querySelectorAll(".iconContainer")),
      shipWraps = gsap.utils.toArray(fleetContainer.querySelectorAll(".svgWrapper")),
      tabLinks = gsap.utils.toArray(mainContentRow.querySelectorAll(".bx--tabs__nav-item")),
      tabPanels = gsap.utils.toArray(mainContentRow.querySelectorAll("[role='tabpanel']"));

  for (const tile of headerTiles) {
    tile.addEventListener('click', function() {
      sectionToggler(this, headerTiles, topTilesRow, mainContentRow)
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
}
