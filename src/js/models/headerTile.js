// headerTile.js
import { cloneTemplate } from '../constructors/loaders'

export class HeaderTile {
  constructor(sectionId, displayTitle) {
    this.mainId = sectionId
    this.displayTitle = displayTitle
    this.templateId = "top-level-section-tile"
    this.html = this.makeHTML()
  }

  static create({mainId, displayTitle}) { return new HeaderTile(mainId, displayTitle) }

  makeHTML() {
    let clone = cloneTemplate(this.mainId, this.templateId),
        tile = clone.querySelector('a.bx--tile'),
        label = tile.querySelector('.label');
    tile.dataset.target = this.mainId
    label.innerHTML = this.displayTitle
    return clone
  }

  setColumnOffset() {
      const box = this.html.children[0],
            pseudoClasses = ["bx--offset-lg-1", "bx--offset-md-1", "bx--offset-sm-0"];

      for (let c of pseudoClasses) { box.classList.add(c) }
    }
}
