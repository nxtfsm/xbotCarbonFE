import './styles/main.scss'
import './styles/fleetGraphic.scss'
import './styles/stickyButton.scss'
import './styles/rowMainTopTiles.scss'
import './styles/rowMainContent.scss'
import { loadTemplatesFromURLs as loadTemplates } from './js/templateLoader'
import { loadScripts } from './js/scriptLoader'
import { loadIcons } from './js/iconLoader'
import { registerEvents } from './js/registerEvents'
import { loadFleetAnimation } from './js/fleetAnimations'

const initFleetGraphicContainer = document.getElementById("animFleetContainer");

loadTemplates()

loadScripts().then( () => {
  loadIcons()
  registerEvents()
  loadFleetAnimation(initFleetGraphicContainer)
})
