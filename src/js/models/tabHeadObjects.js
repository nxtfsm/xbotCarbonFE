// tabHeadObjects.js
import { cloneTemplate } from '../constructors/loaders'

export class TabHead {
  constructor(id, title) {
    this.id = id
    this.title = title
    this.templateId = "tab-nav-head"
  }

  static create(id, title) { return new TabHead(id, title) }

  makeHTML() {
    let clone = cloneTemplate(this.id, this.templateId),
        link = clone.querySelector('a');
    clone.children[0].dataset.target = `tab-panel-${this.id}`
    link.id = `tab-link-${this.id}`
    link.innerHTML = this.title
    return clone
  }
}
