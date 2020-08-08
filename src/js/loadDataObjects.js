// loadDataObjects.js
import * as sectionConfigData from '../data/sectionConfigs.json'
import { initSections } from './sectionConfigs'

export const loadSectionObjects = () => {
  const sectionConfigs = sectionConfigData.default;
  return initSections(sectionConfigs)
}
