import './styles/main.scss'
import './styles/fleetGraphic.scss'
import './styles/stickyButton.scss'
import './styles/rowMainTopTiles.scss'
import './styles/rowMainContent.scss'
import { loadSectionObjects as loadSections } from './js/loadDataObjects'
import { loadTemplatesFromURLs as loadTemplates } from './js/templateLoader'
import { loadScripts } from './js/scriptLoader'
import { loadHeaderTilesInRow } from './js/elementInitializers'
import { loadIcons } from './js/iconLoader'
import { registerEvents } from './js/registerEvents'
import { fleetAnimation } from './js/animations/animations'
import { setBackgroundImage } from './js/mapbox'

export const topLevelSections = loadSections(),
              fleetGraphicContainer = document.getElementById("animFleetContainer"),
              topTilesRow = document.getElementById("bannerTilesContainer"),
              mainContentRow = document.querySelector(".mainContentRow");

setBackgroundImage()
loadTemplates()

loadScripts().then( () => {
  loadHeaderTilesInRow(topLevelSections, topTilesRow)
  loadIcons()
  registerEvents(topLevelSections)
  fleetAnimation(fleetGraphicContainer)
})
