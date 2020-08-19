// registerEvents.js
import * as browserContent from '../../index'
import { fleetToTiles, displayMainContent, switchTabs } from '../constructors/animations'
import { setContentWindow } from '../constructors/loaders'

export const registerEvents = (topLevelSections) => {
  const headerTiles = gsap.utils.toArray(
    browserContent.topTilesRow.querySelectorAll(".tlhTile") );

  browserContent.fleetGraphicGroup.addEventListener('click', function()
    { fleetToTiles(this, headerTiles) })

  browserContent.mainContentRow.addEventListener('click', function(e) {
    if (e.target.classList.contains('bx--tabs__nav-link')) { switchTabs(e.target) } })

  for (let tile of headerTiles) {
    tile.addEventListener('click', function() {
      if (!this.classList.contains('active')) {
      let caller = this,
          targetId = this.dataset.target,
          sectionToLoad = topLevelSections.find(section => section.mainId == targetId);
      setContentWindow(sectionToLoad)
          .then( function() { displayMainContent(targetId) }) }
        })}
}
