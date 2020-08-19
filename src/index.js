import './styles/main.scss'
import './styles/fleetGraphic.scss'
import './styles/stickyButton.scss'
import './styles/rowMainTopTiles.scss'
import './styles/rowMainContent.scss'
import './styles/collapsingTileTabPanel.scss'
import './styles/scrollSections.scss'
import * as appLoader from './js/constructors/loaders'
import { scrollIntroAnimation, fleetAnimation } from './js/constructors/animations'

export const topLevelSections = appLoader.getSections(),
             fleetGraphicGroup = document.getElementById("animFleetContainer"),
             topTilesRow = document.getElementById("bannerTilesContainer"),
             mainContentRow = document.querySelector(".mainContentRow");

appLoader.setMapBG()
appLoader.setTemplates()

appLoader.initScripts().then( () => {
  appLoader.setHeaderTiles(topLevelSections)
  appLoader.setIcons()
  appLoader.setEventListeners(topLevelSections)
  //scrollIntroAnimation()
  fleetAnimation(fleetGraphicGroup)
})
