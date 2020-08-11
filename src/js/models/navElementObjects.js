// navElementObjects.js
import { initCloneFromTemplate } from '../templateLoader'
import { addMultiSelectEvents } from '../constructors/animations'


export class MultiSelect {
  constructor(parentId, filters) {

    this.templateId = "multiselect-dropdown"
    this.parentId = parentId
    this.filters = Object.entries(filters)
    console.log(this.filters)
    this.items = this.filters.map(filter => { return MultiSelectItem.create(filter)})
  }

  static create(parentId, filters) { return new MultiSelect(parentId, filters) }

  makeHTML() {
    let templateId = this.templateId,
        clone = initCloneFromTemplate(this.parentId, this.templateId),
        listbox = clone.querySelector("[role='listbox']");
    this.items.map(item => { listbox.append(item.makeHTML()) })
    addMultiSelectEvents(clone)
    return clone
  }


}

class MultiSelectItem {
  constructor(filter) {
    this.templateId = "multiselect-menuItem"
    this.target = filter[0]
    this.label = filter[1]

  }

  static create(filter) { return new MultiSelectItem(filter)}

  makeHTML() {
    let templateId = this.templateId,
        clone = initCloneFromTemplate(this.target, this.templateId),
        labelText = clone.querySelector(".bx--checkbox-label");
    labelText.innerHTML = this.label
    return clone
  }
}
