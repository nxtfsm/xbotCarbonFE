// animations.js
import { registerAnimFX } from './registerAnimations'
import { loadFleetAnimation, expandFleetToTiles} from './fleetAnimations'
import { addEventHandlers } from './multiselectAnimations'
import { switchTabPanels } from './tabPanelAnimations'
import { expandTileBannerRow, displayContentWindow } from './topLevelSectionAnimations'

export const registerAnimations = () => { return registerAnimFX() },
             fleetAnimation = (cntnr) => { loadFleetAnimation(cntnr) },
             fleetToTiles = (cntnr, tiles) => { expandFleetToTiles(cntnr, tiles) },
             addMultiSelectEvents = (element) => { addEventHandlers(element) },
             switchTabs = (caller) => { switchTabPanels(caller) },
             expandTiles = (tiles) => { return expandTileBannerRow(tiles) },
             displayMainContent = (callerId) => { displayContentWindow(callerId)}
