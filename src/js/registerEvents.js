// registerEvents.js
import { sectionToggler } from './topLevelSectionAnimations'
import { fleetClickHandler } from './fleetAnimations'
import { tabPanelToggler } from './contentTabPanelAnimations'
import { loadHTMLintoElement } from './helperFuncs'
import { initContentSection } from './contentSectionLoader'

const topTilesRow = document.querySelector(".topTilesRow"),
      mainContent = document.querySelector(".mainContentRow"),
      fleetContainer = document.querySelector("#animFleetContainer");

export const registerEvents = () => {

const shipWraps = gsap.utils.toArray(fleetContainer.querySelectorAll(".svgWrapper")),
      headerTiles = gsap.utils.toArray(topTilesRow.querySelectorAll(".tlhTile")),
      tabLinks = gsap.utils.toArray(mainContent.querySelectorAll(".bx--tabs__nav-item")),
      tabPanels = gsap.utils.toArray(mainContent.querySelectorAll("[role='tabpanel']"));

  for (const wrapper of shipWraps) {
      wrapper.addEventListener('click', function() {
        fleetClickHandler(fleetContainer, headerTiles) }) }

  for (const tile of headerTiles) {
      tile.addEventListener('click', function() {
        sectionToggler(this, headerTiles, topTilesRow, mainContent)
        initContentSection() }) }

  mainContent.addEventListener('click', function(e) {
      if (e.target.classList.contains('bx--tabs__nav-link')) {
        tabPanelToggler(e.target, tabLinks, tabPanels) } }) }
