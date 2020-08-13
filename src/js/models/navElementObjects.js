// navElementObjects.js
import { cloneTemplate } from '../constructors/loaders'
import { addMultiSelectEvents } from '../constructors/animations'


export class MultiSelect {
  constructor(parentId, filter) {
    this.templateId = "multiselect-dropdown"
    this.parentId = parentId
    this.id = filter.id
    this.labelMsg = filter.labelMsg
    this.filters = filter.filters

    this.keys = Object.keys(this.filters)
    this.items = this.keys.map(k => {
      return MultiSelectItem.create(k, this.filters[k]) } )
  }

  static create(parentId, filters) { return new MultiSelect(parentId, filters) }

  makeHTML() {
    let clone = cloneTemplate(this.parentId, this.templateId),
        listLabel = clone.querySelector('.bx--list-box__label'),
        listbox = clone.querySelector("[role='listbox']");
    listLabel.innerHTML = this.labelMsg
    this.items.map(item => { listbox.append(item.makeHTML()) })
    addMultiSelectEvents(clone)
    return clone
  }
}

class MultiSelectItem {
  constructor(id, label) {
    this.templateId = "multiselect-menuItem"
    this.target = id
    this.label = label
  }

  static create(id, label) { return new MultiSelectItem(id, label)}

  makeHTML() {
    let templateId = this.templateId,
        clone = cloneTemplate(this.target, this.templateId),
        labelText = clone.querySelector(".bx--checkbox-label");
    labelText.innerHTML = this.label
    return clone
  }
}
