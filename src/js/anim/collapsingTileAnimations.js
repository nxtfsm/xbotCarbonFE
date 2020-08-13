// collapsingTileAnimations.js
import { classToggler } from '../helperFuncs'

export const eventHandlers = element => {
  const topGrid = element.querySelector('.topGrid'),
        tiles = topGrid.querySelectorAll('.bx--tile');

        for (const tile of tiles) { tile.addEventListener('click', function() {
          let tl = gsap.timeline()
          tl.add(tileCollapser(this, tiles, topGrid))
        })}

}

/*const previewPaneExpander = (caller, siblings, inGrid) => {
  //const previewPane = inGrid.querySelector(".previewPaneCol")
}*/

const tileCollapser = (caller, siblings, inGrid) => {
  const tiles = gsap.utils.toArray(siblings),
        tilesCol = inGrid.querySelector('.collapsingTilesCol'),
        previewPaneCol = inGrid.querySelector(".previewPaneCol"),
        containers = gsap.utils.toArray(inGrid.querySelectorAll('.tileRow')),
        callerIdx = tiles.indexOf(caller),
        callerCy = caller.getBoundingClientRect().top + caller.height/2,
        setHeight = inGrid.parentElement.clientHeight - 72,
        anim = gsap.timeline({ defaults: {
          ease: "cubic-bezier(0.2, 0, 0.38, 0.9)",
          stagger: {amount: .1, from: callerIdx,
            ease: "cubic-bezier(0.2, 0, 0.38, 0.9)"} }})


        .to(containers, { width: "-=496px", duration: .6})
        .set(previewPaneCol, {visibility: 'visible', height: setHeight })
        .from(previewPaneCol, {x: -480, scaleY: 0, transformOrigin: "center center" })
        .to(previewPaneCol, {width: 480, opacity: 1, scaleY: 1 }, '<')

        .to(previewPaneCol, {width: 0, opacity: .7, delay: 6 })
        .to(containers, { width: "100%", stagger: {amount: 0 }, duration: .6}, '<')
        .to(previewPaneCol, {width: 0 }, '<')
        .set(previewPaneCol, {visibility: 'visible'});

  return anim
}
