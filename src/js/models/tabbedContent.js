// TabbedContent.js
import { cloneTemplate } from '../constructors/loaders'
import { TabSegment } from './tabSegment'

export class TabbedContent {
  constructor(mainId, config) {
    this.id = mainId
    this.templateId = config.contentTemplateId
    this.tabs = config.tabs.map(tab => { return TabSegment.create(tab) }) }

  static create({mainId, config}) { return new TabbedContent(mainId, config) }

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
