// sectionConfigs.js
import { initCloneFromTemplate } from './templateLoader'

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

class ContentWindow {
  constructor(section) {
    this.inSectionId = section.mainId
    this.type = "blank"
    this.templateId = "main-content-section"
  }

  static create(section) { return new ContentWindow(section) }

  makeHTML() {
    let clone = initCloneFromTemplate(this.inSectionId, this.templateId),
        contentWindow = clone.children[0];
    return clone
  }
}

class TabbedContentWindow {
  constructor(section) {
    this.mainId = section.mainId
    this.type = "tabbed"
    this.sectionTemplateId = section.config.outerTemplateId
    this.templateId = "tabbed-content-window"
    this.tabs = section.config.tabs.map((tab) => { return TabSection.create(tab) })
  }

  static create(section) { return new TabbedContentWindow(section) }

  makeHTML() {
    let clone = initCloneFromTemplate(this.mainId, this.sectionTemplateId),
        contentWindow = clone.children[0],
        innerClone = initCloneFromTemplate(this.mainId, this.templateId),
        tabHeadsList = innerClone.querySelector('ul'),
        tabPanelsContainer = innerClone.querySelector('.panelsContainer');

    this.tabs.map(tab => { tabHeadsList.append( tab.makeNavHeadHTML() )})
    this.tabs.map(tab => { tabPanelsContainer.append( tab.makePanelHTML() )})

    let firstTab = tabHeadsList.children[0],
        firstPanel = tabPanelsContainer.children[0];

    firstTab.classList.add("bx--tabs__nav-item--selected")
    firstPanel.hidden = false
    firstPanel.dataset.ariaHidden = false

    contentWindow.append(innerClone)
    console.log(clone)
    return clone
  }
}

class TabSection {
  constructor(tab) {
    this.id = tab.id
    this.title = tab.title
    this.defaultStr = tab.content.defaultStr
    this.panelTemplate = tab.content.panelTemplate
    this.sourceContents = tab.sourceJSON
    this.navHeadTemplateId = "tab-nav-head"
    this.panelTemplateId = "tab-content-panel"
  }

  static create(tab) { return new TabSection(tab) }

  makeNavHeadHTML() {
    let clone = initCloneFromTemplate(this.id, this.navHeadTemplateId),
        link = clone.querySelector('a');
    clone.children[0].dataset.target = `tab-panel-${this.id}`
    link.id = `tab-link-${this.id}`
    link.innerHTML = this.title
    return clone
  }

  makePanelHTML() {
    let templateId = "tab-content-panel",
        clone = initCloneFromTemplate(this.id, this.panelTemplateId),
        panelContent = clone.querySelector('.tabPanelContent');
    clone.children[0].id = `tab-panel-${this.id}`
    panelContent.innerHTML = this.defaultStr
    return clone
  }
}
