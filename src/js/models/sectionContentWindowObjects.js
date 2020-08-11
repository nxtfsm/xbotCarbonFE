// sectionContentWindowObjects.js
import { cloneTemplate } from '../constructors/loaders'
import { TabSegment } from './tabSegmentObjects'

export class ContentWindow {
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

export class TabbedContentWindow {
  constructor(section) {
    this.mainId = section.mainId
    this.type = "tabbed"
    this.sectionTemplateId = section.config.outerTemplateId
    this.templateId = "tabbed-content-window"
    this.tabs = section.config.tabs.map((tab) => { return TabSegment.create(tab) })

  }

  static create(section) { return new TabbedContentWindow(section) }

  makeHTML() {
    let clone = cloneTemplate(this.mainId, this.sectionTemplateId),
        contentWindow = clone.children[0],
        innerClone = cloneTemplate(this.mainId, this.templateId),
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
