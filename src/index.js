import './styles/main.scss'
import './styles/fleetGraphic.scss'
import './styles/stickyButton.scss'
import './styles/rowMainTopTiles.scss'
import './styles/rowMainContent.scss'
import './styles/mq_rowMainTopTiles.scss'
import { loadSectionObjects as loadSections } from './js/loadDataObjects'
import { loadTemplatesFromURLs as loadTemplates } from './js/templateLoader'
import { loadScripts } from './js/scriptLoader'
import { loadHeaderTilesInRow } from './js/elementInitializers'
import { loadIcons } from './js/iconLoader'
import { registerEvents } from './js/registerEvents'
import { loadFleetAnimation } from './js/fleetAnimations'

export const topLevelSections = loadSections(),
              fleetGraphicContainer = document.getElementById("animFleetContainer"),
              topTilesRow = document.getElementById("bannerTilesContainer"),
              mainContentRow = document.querySelector(".mainContentRow");

loadTemplates()
loadScripts().then( () => {
  loadHeaderTilesInRow(topLevelSections, topTilesRow)
  loadIcons()
  registerEvents(topLevelSections)
  loadFleetAnimation(fleetGraphicContainer)
})
