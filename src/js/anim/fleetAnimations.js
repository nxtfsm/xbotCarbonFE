// fleetAnimations.js
import { registerAnimations, expandTiles } from '../constructors/animations'

let helperMessages = ["(scroll to start)", "(click to skip ahead)"],
    helperText = document.querySelector("#animFleetContainer .helperText");

export const loadFleetAnimation = container => {
  let graphicWrappers = container.querySelectorAll(".svgWrapper")

  registerAnimations().then( () => {
    let tl = gsap.timeline( { repeat: 0, repeatDelay: 0, yoyo: true,
      defaults: { duration: .7, ease: "cubic-bezier(0.4, 0.14, 0.3, 1)" },
        smoothChildTiming: true }),

      yOffsets = ["-.5rem", "1rem", "-.75rem", "-2.25rem"];

      for (let i = 0; i < graphicWrappers.length; i++)
        { tl.set(graphicWrappers[i], { y: yOffsets[i] }) }

      tl.fader(graphicWrappers)
      tl.bobber(graphicWrappers, '<')
      helperTextsAnimSwitcher() } )
}

export const expandFleetToTiles = (container, toTiles) => {
  helperText.remove()
  let tl = gsap.timeline()
      .add(quickFleetCollapser(container))
      .add(quickFleetToTiles(container, toTiles))
      .add(expandTiles(toTiles), '-=.8');
}

let helperTextsAnimSwitcher = () => {
    let switchCounter = 0,
        anim = gsap.timeline({ repeat: -1, repeatDelay: 1.4, yoyo: true,
            defaults: { duration: .7, ease: "sine" },
            smoothChildTiming: true,
            onRepeat: () => {
              const mod = switchCounter % helperMessages.length
              helperText.innerHTML = helperMessages[mod]
              switchCounter++
            } });
    anim.to(helperText, { scaleY: 0, transformOrigin: "center left", opacity: 0 } )
}

let quickFleetCollapser = container => {
    let wrappers = container.querySelectorAll(".svgWrapper"),
        graphics = gsap.utils.toArray(container.querySelectorAll("svg")),
        anim = gsap.timeline({
          defaults: { duration: .7, transformOrigin: "50% 50%",
            ease: 'cubic-bezier(0.2, 0, 0.38, 0.9)'} });

    anim.to(wrappers, {y: 0, stagger: { amount: .2} })
    anim.to(graphics, { rotateZ: "-90deg", stagger: { amount: .2} }, '<')

    for (let wrapper of gsap.utils.toArray(wrappers).reverse()) {
        let delta = MotionPathPlugin.getRelativePosition(wrapper, container, [1, .5], [1,.5])
        anim.to(wrapper, { x: "+=" + delta.x, y: "+=" + delta.y }, '<') }

    return anim
}

let quickFleetToTiles = (container, tiles) => {
    let tilesBounds = [],
        graphicBounds = [],
        graphics = gsap.utils.toArray(container.querySelectorAll("svg"));

    for (let tile of tiles)
      { tilesBounds.push(tile.getBoundingClientRect()) }

    for (let graphic of graphics)
      { graphicBounds.push( graphic.getBoundingClientRect()) }

    let anim = gsap.timeline({
      defaults: { duration: .7, transformOrigin: "50% 50%", ease: 'cubic-bezier(0.2,0,0.38,0.9)'},
      onComplete: function() { container.remove() } })

    for (var i = 0; i < graphics.length; i++) {
      let delta = MotionPathPlugin.getRelativePosition(container, tiles[i], [1, 0.25], [0.5,.75])
      anim.to(graphics[i],
        {opacity: 0, rotateZ: "-=30deg", x: "+=" + (delta.x+48), y: "+=" + delta.y}, '<') }

    anim.to(graphics, {opacity: 0, stagger: {amount: .2}, display: "none" }, "-=.2")
    //anim.add(expandTiles(tiles))

    return anim
}
