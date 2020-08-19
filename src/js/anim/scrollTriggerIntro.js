// scrollTriggerIntro.js
export const initScrollIntroAnim = () => {
  let container = document.querySelector('.scrollSectionsContainer'),
      fleetGraphic = document.querySelector('#animFleetContainer'),
      helperText = fleetGraphic.querySelector('.helperText'),
      sections = gsap.utils.toArray(container.querySelectorAll('.scrollAnimSection')),
      currentSection = sections[0];

  gsap.set(container, {height: (sections.length * 100) + "vh"});

  ScrollTrigger.create({
    trigger: container,
    start: 'top top',
    markers: true,
    onEnter: () => {
      gsap.set(fleetGraphic, {position: 'fixed'})
      gsap.to(helperText, {opacity: 0, display: 'none', duration: .4} )}
  })
  /*sections.forEach((section, i) => {
  ScrollTrigger.create({
    start: () => (i - 0.5) * innerHeight,
    end: () => (i + 0.5) * innerHeight,

    //onToggle: self => self.isActive && setSection(section)
  });*/
//});

/*function setSection(newSection) {
  if (newSection !== currentSection) {
    gsap.to(currentSection, {scale: 0.8, autoAlpha: 0})
    gsap.to(newSection, {scale: 1, autoAlpha: 1});
    currentSection = newSection;
  }*/

}

/*ScrollTrigger.create({
start: 1,
end: () => ScrollTrigger.maxScroll(window) - 1,
onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
onLeave: self => self.scroll(2)
}).scroll(2);*/

//}
