// loaders.js
import { loadTemplatesFromURLs } from '../templateLoader'
import { loadIcons } from '../iconLoader'
import { loadHeaderTilesInRow } from '../elementInitializers'
import { registerEvents } from '../registerEvents'
import { setBackgroundImage } from '../mapbox'
import { loadSectionObjects } from '../loadDataObjects'
import { loadScripts } from '../scriptLoader'

export const setTemplates = () => { loadTemplatesFromURLs() },
             setIcons = () => { loadIcons() },
             setMapBG = () => { setBackgroundImage() },
             setHeaderTiles = (tiles, row) => { loadHeaderTilesInRow(tiles, row) },
             setEventListeners = toSections => { registerEvents(toSections) },
             getSections = () => { return loadSectionObjects() },
             initScripts = () => { return loadScripts() };
