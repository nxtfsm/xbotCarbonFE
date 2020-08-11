// animations.js
import { registerAnimFX } from '../anim/registerAnimations'
import { loadFleetAnimation, expandFleetToTiles} from '../anim/fleetAnimations'
import { addEventHandlers } from '../anim/multiselectAnimations'
import { switchTabPanels } from '../anim/tabPanelAnimations'
import { expandTileBannerRow, displayContentWindow } from '../anim/topSectionAnimations'

export const registerAnimations = () => { return registerAnimFX() },
             fleetAnimation = (cntnr) => { loadFleetAnimation(cntnr) },
             fleetToTiles = (cntnr, tiles) => { expandFleetToTiles(cntnr, tiles) },
             addMultiSelectEvents = (element) => { addEventHandlers(element) },
             switchTabs = (caller) => { switchTabPanels(caller) },
             expandTiles = (tiles) => { return expandTileBannerRow(tiles) },
             displayMainContent = (callerId) => { displayContentWindow(callerId)}
