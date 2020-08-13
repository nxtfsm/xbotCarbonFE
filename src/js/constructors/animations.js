// animations.js
import { registerAnimFX } from '../anim/registerAnimations'
import { loadFleetAnimation, expandFleetToTiles} from '../anim/fleetAnimations'
import { eventHandlers as multiSelectEvents } from '../anim/multiselectAnimations'
import { eventHandlers as collapsingTileEvents} from '../anim/collapsingTileAnimations'
import { switchTabSegments } from '../anim/tabSegmentAnimations'
import { expandTileBannerRow, displayContentWindow } from '../anim/topSectionAnimations'

export const registerAnimations = () => { return registerAnimFX() },
             fleetAnimation = (cntnr) => { loadFleetAnimation(cntnr) },
             fleetToTiles = (cntnr, tiles) => { expandFleetToTiles(cntnr, tiles) },
             addMultiSelectEvents = (element) => { multiSelectEvents(element) },
             addCollapseTileTabEvents = (element) => {collapsingTileEvents(element) },
             switchTabs = (caller) => { switchTabSegments(caller) },
             expandTiles = (tiles) => { return expandTileBannerRow(tiles) },
             displayMainContent = (callerId) => { displayContentWindow(callerId)}
