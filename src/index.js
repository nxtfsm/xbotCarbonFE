import './styles/main.scss'
import './styles/fleetGraphic.scss'
import './styles/stickyButton.scss'
import './styles/rowMainTopTiles.scss'
import './styles/rowMainContent.scss'
import './styles/collapsingTileTabPanel.scss'
import * as loader from './js/constructors/loaders'
import { fleetAnimation } from './js/constructors/animations'

export const topLevelSections = loader.getSections(),
             fleetGraphicContainer = document.getElementById("animFleetContainer"),
             topTilesRow = document.getElementById("bannerTilesContainer"),
             mainContentRow = document.querySelector(".mainContentRow");

loader.setMapBG()
loader.setTemplates()

loader.initScripts().then( () => {
  loader.setHeaderTiles(topLevelSections, topTilesRow)
  loader.setIcons()
  loader.setEventListeners(topLevelSections)
  fleetAnimation(fleetGraphicContainer)
})
