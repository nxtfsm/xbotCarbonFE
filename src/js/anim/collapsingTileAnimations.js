// collapsingTileAnimations.js
import { classToggler } from '../helperFuncs'

export const eventHandlers = element => {
  const topGrid = element.querySelector('.topGrid'),
        tiles = topGrid.querySelectorAll('.bx--tile'),
        tileRows = topGrid.querySelectorAll('.bx--tile-content');

        for (const tile of tiles) {
          tile.addEventListener('click', function() {
            toggleTilesAndPane(topGrid, tiles, this) })
          /*tile.addEventListener('mouseenter', function() {
              frontBackHoverFaderIn(this) }),
          tile.addEventListener('mouseout', function() {
                frontBackHoverFaderOut(this)
              })*/
          }
        /*for (const row of tileRows) {
          row.addEventListener('mouseenter', function() {
            frontBackHoverFaderIn(this)
          })
          row.addEventListener('mouseout', function() {
            frontBackHoverFaderOut(this)
          })
        }*/
}

const frontBackHoverFaderIn = (row) => {
    const aboveFold = row.querySelector(".bx--tile-content__above-the-fold"),
          belowFold = row.querySelector(".bx--tile-content__below-the-fold"),
          tl = gsap.timeline({ defaults: {delay: 1.5, duration: .7,
              ease: "cubic-bezier(0.2, 0, 0.38, 0.9)"} })
            .to(aboveFold, {opacity: 0})
            .to(belowFold, {y: '-120px', opacity: 1}, '<');

    return tl
}

const frontBackHoverFaderOut = (row) => {
    const aboveFold = row.querySelector(".bx--tile-content__above-the-fold"),
          belowFold = row.querySelector(".bx--tile-content__below-the-fold"),
          tl = gsap.timeline({ defaults: { duration: .7,
              ease: "cubic-bezier(0.2, 0, 0.38, 0.9)"} })
            .to(belowFold, {y: 0, opacity: 0})
            .to(aboveFold, {opacity: 1}, '<.2')
            .set(belowFold, {visiblity: 'collapse'})

    return tl
}

const toggleTilesAndPane = (inGrid, tiles, caller) => {
  const tl = gsap.timeline(
    { defaults: { ease: "cubic-bezier(0.2, 0, 0.38, 0.9)", duration: .7 }});

  if (inGrid.classList.contains('previewExpanded')) {
     let outgoingActive = inGrid.querySelector('.activeSelected')
     tl.add(hidePreviewPane(outgoingActive, tiles, inGrid))
     if (outgoingActive == caller) { return } }
  tl.add(displayPreviewPane(caller, tiles, inGrid))
  }

const displayPreviewPane = (caller, siblings, inGrid) => {
  const previewPaneCol = inGrid.querySelector(".previewPaneCol"),
        previewPane = previewPaneCol.querySelector(".previewPane"),
        anim = gsap.timeline({
          onStart: function() {
            inGrid.classList.add('previewExpanded')
            caller.classList.add('activeSelected' ) }})
          .add(resizeTiles(caller, siblings))
          .add(expandColumnWithPane(previewPaneCol, previewPane), '-=.2');
  return anim
}

const hidePreviewPane = (caller, siblings, inGrid) => {
  const previewPaneCol = inGrid.querySelector(".previewPaneCol"),
        previewPane = previewPaneCol.querySelector(".previewPane"),
        anim = gsap.timeline({
          onComplete: function() {
            inGrid.classList.remove('previewExpanded')
            caller.classList.remove('activeSelected')
          } })
        .add(collapseColumnWithPane(previewPaneCol, previewPane))
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
        .to(pane, {opacity: 1, scaleY: 1, transformOrigin: 'top left' }, '<')
        .to(col, {x: 0, flexBasis: 480 }, '<');
      return anim
}

const collapseColumnWithPane = (col, pane) => {
      const anim = gsap.timeline()
        .to(pane, {scaleY: 0.2, opacity: 0, duration: .5 })
        .to(col, {x: -480, flexBasis: 0, duration: .5 }, '<.2')
        .set(col, {visibility: 'collapse'});
      return anim
}
