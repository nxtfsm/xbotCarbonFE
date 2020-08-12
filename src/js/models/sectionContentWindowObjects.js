// sectionContentWindowObjects.js
import { cloneTemplate } from '../constructors/loaders'
import { TabSegment } from './tabSegmentObjects'

export class ContentWindow {
  constructor(section) {
    this.id = section.mainId
    this.type = "blank"
    this.outerTemplateId = "main-content-section"
    //this.outerTemplateId = section.config.outerTemplateId
  }

  static create(section) { return new ContentWindow(section) }

  makeHTML() { return cloneTemplate(this.id, this.outerTemplateId) }
}

export class TabbedContentWindow {
  constructor(section) {
    this.id = section.mainId
    this.type = "tabbed"
    this.outerTemplateId = section.config.outerTemplateId
    this.templateId = section.config.contentTemplateId
    this.tabs = section.config.tabs.map((tab) => { return TabSegment.create(tab) })

  }

  static create(section) { return new TabbedContentWindow(section) }

  makeHTML() {
    let clone = cloneTemplate(this.id, this.outerTemplateId),
        contentWindow = clone.children[0],
        innerClone = cloneTemplate(this.id, this.templateId),
        tabHeadsList = innerClone.querySelector('ul'),
        tabPanelsContainer = innerClone.querySelector('.panelsContainer');

    this.tabs.map(tab => { tab.makeHTML(tabHeadsList, tabPanelsContainer) })

    let firstTab = tabHeadsList.children[0],
        firstPanel = tabPanelsContainer.children[0];

    firstTab.classList.add("bx--tabs__nav-item--selected")
    firstPanel.hidden = false
    firstPanel.dataset.ariaHidden = false

    contentWindow.append(innerClone)
    return clone
  }
}
