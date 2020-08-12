// tabSegmentObjects.js
import { cloneTemplate } from '../constructors/loaders'
import { MultiSelect } from './navElementObjects'
import { tile } from 'carbon-components';

export class TabSegment {
  constructor(tab) {
    this.id = tab.id
    this.title = tab.title
    this.defaultStr = tab.content.defaultStr
    this.sourceContents = tab.content.sourceJSON
    this.filters = tab.content.filters
    this.navHeadTemplateId = "tab-nav-head"
    this.panelTemplateId = tab.content.panelTemplateId
    if (this.panelTemplateId == null) {
      this.panelTemplateId = "tab-content-panel"
    }
  }

  static create(tab) { return new TabSegment(tab) }

  makeHTML(headContainer, panelContainer) {
    headContainer.append(this.makeNavHeadHTML())
    panelContainer.append(this.makePanelHTML())
  }

  makeNavHeadHTML() {
    let clone = cloneTemplate(this.id, this.navHeadTemplateId),
        link = clone.querySelector('a');
    clone.children[0].dataset.target = `tab-panel-${this.id}`
    link.id = `tab-link-${this.id}`
    link.innerHTML = this.title
    return clone
  }

  makePanelHTML() {
    let clone = cloneTemplate(this.id, this.panelTemplateId),
        panel = clone.querySelector('.tabPanel'),
        menuRow = panel.querySelector('.menuRow'),
        defaultText = clone.querySelector('.sampleText');
        clone.children[0].id = `tab-panel-${this.id}`
    if (defaultText) { defaultText.innerHTML = this.defaultStr }

    if (this.filters) {
      menuRow.append(MultiSelect.create(this.id, this.filters).makeHTML()) }

    return clone
  }
}
