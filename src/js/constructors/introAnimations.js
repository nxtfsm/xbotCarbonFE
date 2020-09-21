// introAnimations.js
import { loadFleetAnimation } from '../anim/fleetAnimations'
import { initScrollIntroAnim } from '../anim/scrollTriggerIntro'

export const animateFleetGraphic = (wrapper) => { loadFleetAnimation(wrapper) },
             welcomeScrollStory = () => { initScrollIntroAnim() };
