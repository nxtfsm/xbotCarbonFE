// topLevelSectionObjects.js
import { initCloneFromTemplate } from '../templateLoader'
import { ContentWindow, TabbedContentWindow } from './sectionContentWindowObjects'

export const initSections = fromConfigs => {
  const keys = Object.keys(fromConfigs),
        confs = keys.map(key => {return fromConfigs[key] });
  return confs.map((conf) => {return TopLevelSection.create(conf)})
}

class TopLevelSection {
  constructor(conf) {
    const config = {
      outerTemplateId: "main-content-section",
      contentWindow: ContentWindow.create(this)
    };

    this.mainId = conf.mainId
    this.displayTitle = conf.displayTitle
    this.config = Object.assign({}, config, conf.options)

    if (this.config.tabs) {
       this.config.contentWindow = TabbedContentWindow.create(this)
       this.config.contentTemplateId = "tabbed-content-window"
      }
    }

  static create(conf) { return new TopLevelSection(conf) }

  makeHeaderTileHTML() {
    let templateId = "top-level-section-tile",
        clone = initCloneFromTemplate(this.mainId, templateId),
        tile = clone.querySelector('a.bx--tile'),
        label = tile.querySelector('.label');
    tile.dataset.target = this.mainId
    label.innerHTML = this.displayTitle
    return clone
  }

  makeContentWindowHTML() { return this.config.contentWindow.makeHTML() }
}
