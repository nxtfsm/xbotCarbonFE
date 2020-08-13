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

const tileCollapser = (caller, siblings, inGrid) => {
  const previewPaneCol = inGrid.querySelector(".previewPaneCol"),
        previewPane = previewPaneCol.querySelector(".previewPane"),
        anim = gsap.timeline({ defaults: {
          ease: "cubic-bezier(0.2, 0, 0.38, 0.9)",
          duration: .7 }})
        .add(resizeTiles(caller, siblings))
        .add(expandColumnWithPane(previewPaneCol, previewPane), '-=.2')
        .add(collapseColumnWithPane(previewPaneCol, previewPane), '+=3')
        .add(resizeTiles(caller, siblings, true), '-=.3');
  return anim
}

const resizeTiles = (caller, siblings, collapsed) => {
      let tiles = gsap.utils.toArray(siblings),
          containers = tiles.map(tile => { return tile.parentElement }),
          callerIdx = tiles.indexOf(caller),
          icon = caller.querySelector('button'),
          anim = gsap.timeline(),
          rotation = "-=90deg",
          deltaWidth = "-=480px";

          if (collapsed == true) {
            rotation = "+=90deg"
            deltaWidth = "+=480px" }

          anim.to(icon, {rotateZ: rotation, duration: .4})
              .to(containers, { width: deltaWidth, duration: .7,
                stagger: {amount: .1, from: callerIdx,
                  ease: "cubic-bezier(0.2, 0, 0.38, 0.9)"} }, '<.05')
      return anim
}

const expandColumnWithPane = (col, pane) => {
      const anim = gsap.timeline()
        .set(col, {visibility: 'visible' })
        .fromTo(pane, {scaleY: .2, opacity: 0},
          {opacity: 1, scaleY: 1, transformOrigin: 'top left' }, '<')
        .fromTo(col, {x: -480}, {x: 0, flexBasis: 480 }, '<');
      return anim
}

const collapseColumnWithPane = (col, pane) => {
      const anim = gsap.timeline()
        .to(pane, {scaleY: 0.2, opacity: 0 })
        .to(col, {x: -480, flexBasis: 0 }, '<.2')
        .set(col, {visibility: 'collapse'});
      return anim
}
