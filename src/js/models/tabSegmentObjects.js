// tabSegmentObjects.js
import { TabPanel } from './tabPanelObjects'
import { TabHead } from './tabHeadObjects'

export class TabSegment {
  constructor(tab) {
    this.id = tab.id
    this.title = tab.title

    this.navHead = TabHead.create(tab.id, tab.title)
    this.contentPanel = TabPanel.create(tab)
  }

  static create(tab) { return new TabSegment(tab) }

  makeHTML() {
    this.navHead.makeHTML()
    this.contentPanel.makeHTML()
  }

  setActiveHTML() {
    this.navHead.setActiveHTML()
    this.contentPanel.setActiveHTML()
  }
}
