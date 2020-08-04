export const registerAnimFX = () => {
  return new Promise(
    function( completionHandler ) {
      initArrayFaderEffect()
      initArrayVertBobEffect()
      completionHandler()
    })
}

let initArrayFaderEffect = () => {
      gsap.registerEffect({
        name: "fader",
        effect: (targets, config) => {
          let tl = gsap.timeline({ delay: .4, repeat: -1, repeatDelay: .4,
            defaults: { duration: 1, ease: "sine" } })
          tl.to(targets, { opacity: .7, transformOrigin: "bottom left", repeat: -1, yoyo: true,
                stagger: { amount: .4, from: 0 } });
          return tl },
        extendTimeline: true }) },

    initArrayVertBobEffect = () => {
      gsap.registerEffect({
        name: "bobber",
        effect: (targets, config) => {
          let tl = gsap.timeline({ delay: .4, repeat: -1, repeatDelay: .4,
            defaults: { duration: 1, ease: "sine" } })
          tl.to(targets, { rotateY: "-10deg", repeat: -1, yoyo: true,
            stagger: { amount: .4, from: 0 }} )
          return tl },
        extendTimeline: true }) }
