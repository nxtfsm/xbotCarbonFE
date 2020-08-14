// tabbedContent.js
import { cloneTemplate } from '../constructors/loaders'
import { TabSegment } from './tabSegmentObjects'

export class TabbedContent {
  constructor(id, config) {
    this.id = id
    this.templateId = config.contentTemplateId
    this.tabs = config.tabs.map(tab => { return TabSegment.create(tab) }) }

  static create(id, config) { return new TabbedContent(id, config) }

  makeHTML() {
    let clone = cloneTemplate(this.id, this.templateId),
        tabHeadsList = clone.querySelector('ul'),
        tabPanelsContainer = clone.querySelector('.panelsContainer');

        this.tabs.map(tab => { tab.makeHTML(tabHeadsList, tabPanelsContainer) })

    let firstTab = tabHeadsList.children[0],
        firstPanel = tabPanelsContainer.children[0];

        firstTab.classList.add("bx--tabs__nav-item--selected")
        firstPanel.hidden = false
        firstPanel.dataset.ariaHidden = false
    return clone
  }
}
