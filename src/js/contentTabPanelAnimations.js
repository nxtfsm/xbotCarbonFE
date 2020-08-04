// contentTabPanelAnimations.js
import { classToggler } from './helperFuncs.js'

export const tabPanelToggler = (caller, links, panels) => {
  if (!caller.classList.contains("bx--tabs__nav-item--selected")) {
    let currentActiveLink = document.querySelector(".bx--tabs__nav-item--selected"),
        currentActivePanel = document.querySelector(currentActiveLink.dataset.target),
        newActivePanel = document.querySelector(caller.dataset.target),
        links = [currentActiveLink, caller],
        panels = [currentActivePanel, newActivePanel];

    for (const link of links)
      { classToggler(link, "bx--tabs__nav-item--selected") }

    for (const panel of panels)
      { if (panel.hidden) { panel.hidden = false, panel.ariaHidden = false }
        else { panel.hidden = true, panel.ariaHidden = true } }
  }
}
