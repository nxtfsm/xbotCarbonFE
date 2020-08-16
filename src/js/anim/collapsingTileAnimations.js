// collapsingTileAnimations.js
import { classToggler } from '../helperFuncs'

export const eventHandlers = element => {
  const topGrid = element.querySelector('.topGrid'),
        tiles = topGrid.querySelectorAll('.bx--tile');

        for (const tile of tiles) { tile.addEventListener('click', function() {
          let tl = gsap.timeline(
            { defaults: {ease: "cubic-bezier(0.2, 0, 0.38, 0.9)", duration: .7 }});
          /*if (!topGrid.classList.contains('previewExpanded')) {
            return tl.add(displayPreviewPane(this, tiles, topGrid)) }

          else {
            let outgoingActive = topGrid.querySelector('.activeSelected')
            tl.add(hidePreviewPane(outgoingActive, tiles, topGrid))
            if (this == outgoingActive) { return }
            tl.add(displayPreviewPane(this, tiles, topGrid), '-=.2')
            return
          }*/
          if (topGrid.classList.contains('previewExpanded')) {
            let outgoingActive = topGrid.querySelector('.activeSelected')

            tl.add(hidePreviewPane(outgoingActive, tiles, topGrid))

            if (outgoingActive != this) {
              tl.add(displayPreviewPane(this, tiles, topGrid))
             }

            //else {
              //console.log('firing in 3')
              //tl.add(hidePreviewPane(outgoingActive, tiles, topGrid))
              //tl.add(displayPreviewPane(this, tiles, topGrid))
              return
            }

            tl.add(displayPreviewPane(this, tiles, topGrid))
          })

            //.add(displayPreviewPane(this, tiles, topGrid))
            //.add(hidePreviewPane(this, tiles, topGrid), '+=3')


      }
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

const tileCollapser = (caller, siblings, inGrid) => {
  const previewPaneCol = inGrid.querySelector(".previewPaneCol"),
        previewPane = previewPaneCol.querySelector(".previewPane"),
        anim = gsap.timeline()
        //.add(resizeTiles(caller, siblings))
        //.add(expandColumnWithPane(previewPaneCol, previewPane), '-=.2')
        .add(displayPreviewPane(caller, siblings, inGrid))
        .add(hidePreviewPane(caller, siblings, inGrid), '+=3')
        //.add(collapseColumnWithPane(previewPaneCol, previewPane), '+=3')
        //.add(resizeTiles(caller, siblings, true), '-=.3');
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
        //.fromTo(pane, {scaleY: .2, opacity: 0},
        //  {opacity: 1, scaleY: 1, transformOrigin: 'top left' }, '<')
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
