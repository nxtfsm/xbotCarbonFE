// tabSegmentAnimations.js
import { classToggler } from '../helperFuncs'

export const switchTabSegments = (caller) => {
  if (!caller.parentElement.classList.contains("bx--tabs__nav-item--selected")) {
    let panelsCntnr = document.querySelector('.panelsContainer'),
        tabHeadsCntnr = document.querySelector('.tabHeadsContainer'),
        callerTabHead = caller.parentElement,
        currentTabHead = tabHeadsCntnr.querySelector(".bx--tabs__nav-item--selected"),
        currentTargetId = '#' + currentTabHead.dataset.target,
        getTargetId = '#' + callerTabHead.dataset.target,
        currentPanel = panelsCntnr.querySelector(currentTargetId),
        getPanel = panelsCntnr.querySelector(getTargetId),
        tabHeads = [currentTabHead, callerTabHead],
        panels = [currentPanel, getPanel];

    for (const tabHead of tabHeads)
      { classToggler(tabHead, "bx--tabs__nav-item--selected") }

    for (const panel of panels)
      { console.log(panel)
        if (panel.hidden) { panel.hidden = false, panel.ariaHidden = false }
        else { panel.hidden = true, panel.ariaHidden = true } }
  }
}
