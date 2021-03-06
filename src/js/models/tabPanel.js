// tabPanel.js
import { cloneTemplate } from '../constructors/loaders'
import { MultiSelect } from './multiSelect'
import { addCollapseTileTabEvents } from '../constructors/animations'
import { loadContentTileIcons } from '../controllers/iconLoader'

export class TabPanel {
  constructor(tab) {
    this.id = tab.id
    this.title = tab.title
    this.defaultStr = tab.content.defaultStr
    this.sourceContents = tab.content.sourceJSON
    this.filters = tab.content.filters
    this.templateId = tab.content.panelTemplateId
    if (this.templateId == null) { this.templateId = "tab-content-panel" }
  }

  static create(tab) { return new TabPanel(tab) }

  makeHTML() {
    let clone = cloneTemplate(this.id, this.templateId),
        panel = clone.querySelector('.tabPanel'),
        menuRow = panel.querySelector('.menuRow'),
        svgWrapper = panel.querySelector('.svgWrapper'),
        defaultText = clone.querySelector('.sampleText');
        clone.children[0].id = `tab-panel-${this.id}`
    if (defaultText) { defaultText.innerHTML = this.defaultStr }

    if (this.filters) {
      for (const filter of this.filters) {
        menuRow.append( MultiSelect.create(this.id, filter).html )
        }
      }

    if (svgWrapper) {
      loadContentTileIcons(svgWrapper)
    }

    if (this.templateId == 'collapsing-tile-tab-panel') {
      addCollapseTileTabEvents(clone)
    }

    this.html = clone
  }

  setActiveHTML() {
    this.html.children[0].hidden = false
    this.html.children[0].dataset.ariaHidden = false
  }
}
