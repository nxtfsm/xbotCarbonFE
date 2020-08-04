import './styles/main.scss'
import './styles/fleetGraphic.scss'
import './styles/stickyButton.scss'
import './styles/rowMainTopTiles.scss'
import './styles/rowMainContent.scss'
import { scriptLoader } from './js/scriptLoader'
import { iconLoader } from './js/iconLoader'
import { registerEvents } from './js/registerEvents'
import { fleetAnimLoader } from './js/fleetAnimations'

const initFleetGraphicContainer = document.getElementById("animFleetContainer");

scriptLoader().then( () => {
  iconLoader()
  registerEvents()
  fleetAnimLoader(initFleetGraphicContainer)

})
