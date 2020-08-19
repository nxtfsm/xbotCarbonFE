// mainBody.js
import { TopLevelSection } from './topLevelSectionObjects'
import * as sectionConfigJSON from '../../data/sectionConfigs.json'
import { displayMainContent } from '../constructors/animations'

export class MainBody {
  constructor(domGridElement) {
    this.offsetColumns = true
    this.headerTilesRow = domGridElement.querySelector('.topTilesRow')
    this.mainContentRow = domGridElement.querySelector('.mainContentRow')
    this.sections = this.loadTopLevelSections(sectionConfigJSON.default)
    this.headerTiles = this.getHeaderTilesHTML()

    this.stageHeaderTilesInRow()
  }

  static create(domGridElement) { return new MainBody(domGridElement) }

  loadTopLevelSections(fromConfigs) {
    const keys = Object.keys(fromConfigs),
          configs = keys.map(key => {return fromConfigs[key] });
    return configs.map((conf) => {return TopLevelSection.create(conf)})
  }

  getHeaderTilesHTML() {
    const tiles = this.sections.map((section, i) => {
      if (i == 0 && this.offsetColumns == true) { section.setOffsetOnHeaderTile() }
      return section.headerTileHTML })
    return tiles
  }

  stageHeaderTilesInRow() {
    for (const tile of this.headerTiles) { this.headerTilesRow.append(tile) }
  }

  stageContentWindowForSection(section) {
    const inRow = this.mainContentRow;
    return new Promise(function(onResolve) {
      inRow.append(section.getMainContentWindowHTML())
      return onResolve()
    })
  }

  displayContentWindow(callerId) {
    return () => { displayMainContent(callerId) }
  }
}
