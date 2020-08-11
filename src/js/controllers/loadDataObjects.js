// loadDataObjects.js
import * as sectionConfigData from '../../data/sectionConfigs.json'
import { initSections } from '../models/topLevelSectionObjects'

export const loadSectionObjects = () => { return initSections(sectionConfigData.default)}
