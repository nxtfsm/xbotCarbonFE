import './styles/main.scss'
import './styles/fleetGraphic.scss'
import './styles/stickyButton.scss'
import './styles/rowMainTopTiles.scss'
import './styles/rowMainContent.scss'
import './styles/collapsingTileTabPanel.scss'
import './styles/scrollSections.scss'
import { MainBody } from './js/models/MainBody'
import * as appLoader from './js/constructors/loaders'
import * as startAnimations from './js/constructors/introAnimations'

export const mainBody = MainBody.create(document.getElementById("mainBody")),
             fleetGraphicGroup = document.getElementById("animFleetContainer");

appLoader.setMapBG()
appLoader.setTemplates()

appLoader.initScripts().then( () => {
  appLoader.setIcons()
  appLoader.setEventListeners()
  startAnimations.animateFleetGraphic(fleetGraphicGroup)
  //startAnimations.welcomeScrollStory()
})
