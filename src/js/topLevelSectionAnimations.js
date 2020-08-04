// topLevelSectionAnimations.js
import { classToggler } from './helperFuncs.js'

export const sectionToggler = (caller, tiles, rowToShrink, rowToExpand) => {
  if (!caller.classList.contains("active")) {
    let thisIdx = tiles.indexOf(caller),
        labels = gsap.utils.toArray(document.querySelectorAll('.tlhTile .label')),
        currentActive = document.querySelector(".active"),
        tl = gsap.timeline( { defaults: { duration: .4, transformOrigin: "center center",
          ease: 'cubic-bezier(0.2, 0, 0.38, 0.9)' } });

      if (currentActive) {
          tl.to(currentActive.querySelector(".iconContainer"), { rotateZ: "+=180deg" })
          classToggler(currentActive, 'active')
          }

          tl.to(caller.querySelector(".iconContainer"),
            { rotateZ: "+=180deg", transformOrigin: "center center" }, '<')
          .to(tiles, {height: "4.5rem", stagger: {amount: .2, from: thisIdx, ease: "cubic-bezier(0.2, 0, 0.38, 0.9)"}, duration: .7}, '<.2')
          .to(document.querySelector(".topTilesRow"),
            {height: "4.5rem", duration: .7}, "<")

          .to(rowToExpand, {scaleX: 1, opacity: 1, duration: 1}, "-=.1")
          .to(rowToExpand, {height: "80vh", duration: 1}, "<.3")

        classToggler(caller, 'active')
    }
}

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
