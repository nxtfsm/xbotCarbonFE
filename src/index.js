import './styles/main.scss'
import './styles/fleetGraphic.scss'
import './styles/stickyButton.scss'
import './styles/rowMainTopTiles.scss'
import './styles/rowMainContent.scss'
import { loadSectionObjects } from './js/loadDataObjects'
import { loadTemplatesFromURLs as loadTemplates } from './js/templateLoader'
import { loadScripts } from './js/scriptLoader'
import { loadIcons } from './js/iconLoader'
import { registerEvents } from './js/registerEvents'
//import { initSections } from './js/sectionConfigs'
import { loadFleetAnimation } from './js/fleetAnimations'
import { loadHeaderTilesInGrid } from './js/elementInitializers'


/*import * as sectionConfigData from './data/sectionConfigs.json'
const sectionConfigs = sectionConfigData.default,
      topLevelSections = initSections(sectionConfigs),*/
const topLevelSections = loadSectionObjects(),
      initFleetGraphicContainer = document.getElementById("animFleetContainer"),
      topTilesRow = document.getElementById("mainSectionContainer");


loadTemplates()

loadScripts().then( () => {
  loadHeaderTilesInGrid(topLevelSections, topTilesRow)
  loadIcons()
  registerEvents(topLevelSections)
  loadFleetAnimation(initFleetGraphicContainer)
})
