// loaders.js
import { loadTemplatesFromURLs, initClone } from '../controllers/templateLoader'
import { loadIcons } from '../controllers/iconLoader'
import { loadHeaderTilesRow, loadContentRow } from '../controllers/elementInitializers'
import { registerEvents } from '../controllers/registerEvents'
import { setBackgroundImage } from '../controllers/mapbox'
import { loadSectionObjects } from '../controllers/loadDataObjects'
import { loadScripts } from '../controllers/scriptLoader'

export const setTemplates = () => { loadTemplatesFromURLs() },
             setIcons = () => { loadIcons() },
             setMapBG = () => { setBackgroundImage() },
             setHeaderTiles = (tiles, row) => { loadHeaderTilesRow(tiles, row) },
             cloneTemplate = (forId, tempId) => { return initClone(forId, tempId) },
             setEventListeners = toSections => { registerEvents(toSections) },
             getSections = () => { return loadSectionObjects() },
             initScripts = () => { return loadScripts() },
             setContentWindow = (load, row) => { return loadContentRow(load, row)};
