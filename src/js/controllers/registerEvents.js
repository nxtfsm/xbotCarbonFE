// registerEvents.js
import { mainBody, fleetGraphicGroup } from '../../index'
import { fleetToTiles, switchTabs } from '../constructors/animations'

export const registerEvents = () => {
  const tiles = gsap.utils.toArray(
    mainBody.headerTilesRow.querySelectorAll(".tlhTile"));

  fleetGraphicGroup.addEventListener('click', function() { fleetToTiles(this, tiles) })

  mainBody.mainContentRow.addEventListener('click', function(e) {
    if (e.target.classList.contains('bx--tabs__nav-link')) { switchTabs(e.target) } })

  for (let tile of tiles) {
    tile.addEventListener('click', function() {
      if (!this.classList.contains('active')) {
      let fromTargetId = this.dataset.target,
          toLoad = mainBody.sections.find(section => section.mainId == fromTargetId);

      mainBody.stageContentWindowForSection(toLoad)
        .then(mainBody.displayContentWindow(fromTargetId))
      }

    })}

}
