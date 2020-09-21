// contentWindow.js
import { cloneTemplate } from '../constructors/loaders'
import { TabbedContent } from './tabbedContent'

export class ContentWindow {
  constructor(mainId, config) {
    this.mainId = mainId
    this.config = config

    if (this.config.type == "tabbed")
      { this.content = TabbedContent.create(this) }
  }

  static create({mainId, config}) { return new ContentWindow(mainId, config) }

  makeHTML() {
    const clone = cloneTemplate(this.mainId, this.config.outerTemplateId);
    if (this.content) {
      this.content.makeHTML()
      clone.children[0].append( this.content.html ) }
    this.html = clone
  }

}
