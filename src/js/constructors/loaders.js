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
             setHeaderTiles = (forSections) => { loadHeaderTilesRow(forSections) },
             cloneTemplate = (forId, tempId) => { return initClone(forId, tempId) },
             setEventListeners = toSections => { registerEvents(toSections) },
             getSections = () => { return loadSectionObjects() },
             initScripts = () => { return loadScripts() },
             setContentWindow = (forSection) => { return loadContentRow(forSection)};
