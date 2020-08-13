// tabPanelObjects.js
import { cloneTemplate } from '../constructors/loaders'
import { MultiSelect } from './navElementObjects'
import { addCollapseTileTabEvents } from '../constructors/animations'

export class TabPanel {
  constructor(tab) {
    this.id = tab.id
    this.title = tab.title
    this.defaultStr = tab.content.defaultStr
    this.sourceContents = tab.content.sourceJSON
    this.filters = tab.content.filters
    this.templateId = tab.content.panelTemplateId
    if (this.templateId == null) {
      this.templateId = "tab-content-panel"
    }
  }

  static create(tab) { return new TabPanel(tab) }

  makeHTML() {
    let clone = cloneTemplate(this.id, this.templateId),
        panel = clone.querySelector('.tabPanel'),
        menuRow = panel.querySelector('.menuRow'),
        defaultText = clone.querySelector('.sampleText');
        clone.children[0].id = `tab-panel-${this.id}`
    if (defaultText) { defaultText.innerHTML = this.defaultStr }

    if (this.filters) {
      menuRow.append(MultiSelect.create(this.id, this.filters).makeHTML()) }

    if (this.templateId == 'collapsing-tile-tab-panel') {
      addCollapseTileTabEvents(clone)
    }

    return clone
  }
}
