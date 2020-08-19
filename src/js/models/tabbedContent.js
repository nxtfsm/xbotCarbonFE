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

        this.tabs.map((tab, i) => {
          tab.makeHTML()
          if (i == 0) { tab.setActiveHTML() }
          tabHeadsList.append(tab.navHead.html)
          tabPanelsContainer.append(tab.contentPanel.html)
        })

    this.html = clone
  }
}
