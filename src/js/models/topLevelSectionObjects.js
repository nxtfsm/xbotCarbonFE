// topLevelSectionObjects.js
import { cloneTemplate } from '../constructors/loaders'
import { ContentWindow, TabbedContentWindow } from './sectionContentWindowObjects'

export class TopLevelSection {
  constructor(conf) {
    const config = { outerTemplateId: "main-content-section" }

    this.mainId = conf.mainId
    this.displayTitle = conf.displayTitle
    this.config = Object.assign({}, config, conf.options)
    this.contentWindow = ContentWindow.create(this)
    this.headerTileHTML = this.makeHeaderTileHTML()
    this.headerTileClick = this.setTileEventHandler()
  }

  static create(conf) { return new TopLevelSection(conf) }

  makeHeaderTileHTML() {
    let templateId = "top-level-section-tile",
        clone = cloneTemplate(this.mainId, templateId),
        tile = clone.querySelector('a.bx--tile'),
        label = tile.querySelector('.label');
    tile.dataset.target = this.mainId
    label.innerHTML = this.displayTitle
    return clone
  }

  getMainContentWindowHTML() {
    this.contentWindow.makeHTML()
    return this.contentWindow.html }


  setOffsetOnHeaderTile() {
      const box = this.headerTileHTML.children[0],
            pseudoClasses = ["bx--offset-lg-1", "bx--offset-md-1", "bx--offset-sm-0"];

      for (let c of pseudoClasses) { box.classList.add(c) }
    }

  setTileEventHandler() {
    const tile = this.headerTileHTML.children[0]

    return () => { this.getContentWindowHTMLFromTile(tile) }
  }

  getContentWindowHTMLFromTile(tile) {
    if (!tile.classList.contains('active')) {
      this.contentWindow.makeHTML()
      console.log('in refactor. this.contentWindow: ', this.contentWindow.html.children[0])
      return this.contentWindow.html
    }
  }

  loadContentToRow(row) {
    this.contentWindow.makeHTML()
    row.append(this.contentWindow.html)
  }

}
