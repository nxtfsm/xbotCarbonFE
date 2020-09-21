// topLevelSection.js
import { HeaderTile } from './headerTile'
import { ContentWindow } from './contentWindow'

export class TopLevelSection {
  constructor(conf) {
    const config = { outerTemplateId: "main-content-section" }

    this.mainId = conf.mainId
    this.displayTitle = conf.displayTitle
    this.config = Object.assign({}, config, conf.options)
    this.headerTile = HeaderTile.create(this)
    this.contentWindow = ContentWindow.create(this)
  }

  static create(conf) { return new TopLevelSection(conf) }

  getContentWindowHTML() {
    this.contentWindow.makeHTML()
    return this.contentWindow.html }

}
