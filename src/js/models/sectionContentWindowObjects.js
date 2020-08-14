// sectionContentWindowObjects.js
import { cloneTemplate } from '../constructors/loaders'
import { TabbedContent } from './tabbedContent'

export class ContentWindow {
  constructor(section) {
    this.id = section.mainId
    this.type = section.config.type
    this.config = section.config
    this.templateId = section.config.outerTemplateId

    if (this.type == "tabbed")
      { this.content = TabbedContent.create(this.id, this.config) }
  }

  static create(section) { return new ContentWindow(section) }

  makeHTML() {
    const clone = cloneTemplate(this.id, this.templateId);
    if (this.content) { clone.children[0].append( this.content.makeHTML() ) }
    return clone
  }
}
