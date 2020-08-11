// tabSegmentObjects.js
import { cloneTemplate } from '../constructors/loaders'
import { MultiSelect } from './navElementObjects'

export class TabSegment {
  constructor(tab) {
    this.id = tab.id
    this.title = tab.title
    this.defaultStr = tab.content.defaultStr
    this.panelTemplate = tab.content.panelTemplate
    this.sourceContents = tab.content.sourceJSON
    this.contentFilters = tab.content.filters
    this.navHeadTemplateId = "tab-nav-head"
    this.panelTemplateId = "tab-content-panel"

    if (this.contentFilters) { console.log(this.contentFilters)}
  }

  static create(tab) { return new TabSegment(tab) }

  makeNavHeadHTML() {
    let clone = cloneTemplate(this.id, this.navHeadTemplateId),
        link = clone.querySelector('a');
    clone.children[0].dataset.target = `tab-panel-${this.id}`
    link.id = `tab-link-${this.id}`
    link.innerHTML = this.title
    return clone
  }

  makePanelHTML() {
    let templateId = "tab-content-panel",
        clone = cloneTemplate(this.id, this.panelTemplateId),
        panelContent = clone.querySelector('.tabPanelContent'),
        defaultText = clone.querySelector('.sampleText');
    clone.children[0].id = `tab-panel-${this.id}`
    defaultText.innerHTML = this.defaultStr
    if (this.contentFilters) {

      panelContent.append(MultiSelect.create(this.id, this.contentFilters).makeHTML())
    }
    return clone
  }
}
