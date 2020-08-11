// topLevelSectionAnimations.js
import { classToggler } from '../helperFuncs'
import { topTilesRow, mainContentRow } from '../../index'

export const expandTileBannerRow = tiles => {
    let labels = [],
        icons = [],
        anim = gsap.timeline({
          defaults: { duration: .7, ease: 'cubic-bezier(.62, .1, .8, 1)',
          stagger: { amount: .2, ease: 'cubic-bezier(.62, .1, .8, 1)', from: 1} } });

    for (let tile of tiles) {
      labels.push(tile.querySelector('.label'))
      icons.push(tile.querySelector('.iconContainer')) }

    anim.to(tiles, { width: "100%", visibility: "visible", opacity: 1 }, "-=.1")
        .to(tiles, { height: "100%" }, '<.4')
        .to(labels, { opacity: 1, transformOrigin: "bottom left" }, "-=.2")
        .to(icons, { opacity: 1, transformOrigin: "bottom left"}, "<")
    return anim
  }

export const displayContentWindow = callerId => {
    let callerCol = topTilesRow.querySelector(`[data-target=${callerId}]`),
        callerTile = callerCol.querySelector('.tlhTile'),
        activeTile = topTilesRow.querySelector('.active'),
        tl = gsap.timeline( {
          defaults: {
            duration: .4,
            transformOrigin: "center center",
            ease: 'cubic-bezier(0.2, 0, 0.38, 0.9)' },
          onStart: () => {
            [callerTile, activeTile].map((i) => { if (i) {classToggler(i, 'active')}})}
          })

    if (activeTile == null) { return tl.add(firstDisplayContentWindow(callerTile)) }

    tl.add(switchDisplayContentWindow(activeTile, callerTile))
}

const firstDisplayContentWindow = fromTile => {
  let anim = gsap.timeline()
    .add(reduceTileRow(fromTile))
    .add(expandContentWindow(mainContentRow.children[0]))
  return anim
}

const switchDisplayContentWindow = (outgoingTile, incomingTile) => {
  let anim = gsap.timeline()
    .add(flipIcon(outgoingTile))
    .add(flipIcon(incomingTile), '<')
    .add(collapseContentWindow(mainContentRow.children[0]), '<')
    .add(expandContentWindow(mainContentRow.children[1]))
  return anim
}

const expandContentWindow = incomingWindow => {
  let anim = gsap.timeline({ defaults: {transformOrigin: 'top left'} })
    .set(incomingWindow, {visibility: 'visible'})
    .to(incomingWindow, {scaleX: 1, opacity: 1, duration: .7})
    .to(incomingWindow, {height: "80vh", duration: .7}, "<.3")
  return anim
}

const collapseContentWindow = outgoingWindow => {
  let anim = gsap.timeline({
    defaults: {transformOrigin: 'bottom left'},
    onComplete: () => { outgoingWindow.remove() } })
    .to(outgoingWindow, {height: "5rem", opacity: 0, duration: .6})
    .to(outgoingWindow, {scaleX: .1, duration: .6}, "<.3")
  return anim
}

const reduceTileRow = caller => {
  let tiles = gsap.utils.toArray(topTilesRow.querySelectorAll('.tlhTile')),
      cols = gsap.utils.toArray(topTilesRow.querySelectorAll('.bx--col')),
      labels = gsap.utils.toArray(topTilesRow.querySelectorAll('.label')),
      icons = gsap.utils.toArray(topTilesRow.querySelectorAll('.iconContainer')),
      callerIdx = tiles.indexOf(caller),
      anim = gsap.timeline({ defaults: {
        stagger: {amount: .2, from: callerIdx, ease: "cubic-bezier(0.2, 0, 0.38, 0.9)"}
      }})
        .add(flipIcon(caller))
        .to(tiles, { height: "4.5rem", duration: .8}, '<.2')
        .add(restyleText(labels), '<')
        .to(icons, { bottom: "1rem" }, '<')
        .to(topTilesRow, {height: "4.5rem", duration: .8}, "<")
        .set(mainContentRow, {visibility: "visible"})
        .set(cols, {height: "4.5rem"});
      return anim
}

const restyleText = text => {
  let anim = gsap.timeline()
    .to(text, {opacity: 0, scaleY: .1, duration: .4, transformOrigin: "bottom center"})
    .set(text, {fontSize: "1.75rem", lineHeight: "2.25rem", fontWeight: 400})
    .to(text, {opacity: 1, scaleY: 1, duration: .4, transformOrigin: "bottom center"});
  return anim
}

const flipIcon = caller => {
  let icon = caller.querySelector(".iconContainer"),
      anim = gsap.to(icon, { rotateZ: "+=180deg", transformOrigin: "center center" });
  return anim
}
