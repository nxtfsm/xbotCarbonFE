// loaders.js
import { loadTemplatesFromURLs, initClone } from '../controllers/templateLoader'
import { loadIcons } from '../controllers/iconLoader'
import { registerEvents } from '../controllers/registerEvents'
import { setBackgroundImage } from '../controllers/mapbox'
import { loadScripts } from '../controllers/scriptLoader'

export const setTemplates = () => { loadTemplatesFromURLs() },
             setIcons = () => { loadIcons() },
             setMapBG = () => { setBackgroundImage() },
             setEventListeners = () => { registerEvents() },
             cloneTemplate = (forId, tempId) => { return initClone(forId, tempId) },
             initScripts = () => { return loadScripts() };
