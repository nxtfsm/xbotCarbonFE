// elementInitializers.js
export const loadHeaderTilesInRow = (sections, container) => {
  let withOffset = true,
      tiles = createSectionHeadTiles(sections, withOffset);
  for (var i = 0; i < tiles.length; i++) { container.appendChild(tiles[i]) }
}

export const loadContentWindowInRow = (section, container) => {
  return new Promise((onResolve) => {
  container.append(initContentSection(section))
    return onResolve()
  })
}

const createSectionHeadTiles = (sections, withOffset) => {
  let tiles = sections.map( section => { return initSectionHeadTile(section) });
  if (withOffset) {
    const firstCol = tiles[0].children[0],
          pseudoClasses = ["bx--offset-lg-1", "bx--offset-md-1", "bx--offset-sm-0"];
    for (let c of pseudoClasses) { firstCol.classList.add(c) } }
  return tiles
}

const initSectionHeadTile = section => {
  let templateId = "top-level-section-tile",
      clone = initCloneFromTemplate(section.mainId, templateId),
      tile = clone.querySelector('a.bx--tile'),
      label = tile.querySelector('.label');
      tile.dataset.target = section.mainId
      label.innerHTML = section.displayTitle
      return clone
}

const initContentSection = section => {
  let templateId = "main-content-section",
      clone = initCloneFromTemplate(section.mainId, templateId),
      contentWindow = clone.children[0];

  if (section.config.tabs)
      { contentWindow.append(initTabbedWindow(section.mainId, section.config.tabs)) }

  return clone
}

const initTabbedWindow = (forSectionId, tabs) => {
    let templateId = "tabbed-content-window",
        headTemplateId = "tab-nav-head",
        panelTemplateId = "tab-content-panel",
        clone = initCloneFromTemplate(forSectionId, templateId),
        tabHeadsList = clone.querySelector('ul'),
        tabContentsContainer = clone.querySelector('.panelsContainer'),
        tabHeads = initTabNavHeads(tabs),
        tabPanels = initTabContentPanels(tabs);
        for (let i = 0; i < tabs.length; i++) {
          tabHeadsList.append(tabHeads[i])
          tabContentsContainer.append(tabPanels[i])
        }

      return clone
}

const initTabNavHeads = tabs => {
    let templateId = "tab-nav-head",
        clones = tabs.map( tab => { return initCloneFromTemplate(tab.id, templateId) });
        for (let i = 0; i < tabs.length; i++) {
          let clone = clones[i].children[0],
              link = clone.querySelector('a');
              clone.dataset.target = `tab-panel-${tabs[i].id}`
              link.id = `tab-link-${tabs[i].id}`
              link.innerHTML = tabs[i].title
              if (i == 0) {
                clone.classList.add("bx--tabs__nav-item--selected")
              }
        }
    return clones
}

const initTabContentPanels = tabs => {
    let templateId = "tab-content-panel",
        clones = tabs.map( tab => { return initCloneFromTemplate(tab.id, templateId) });
        for (let i = 0; i < tabs.length; i++) {
          let clone = clones[i].children[0],
              content = clone.querySelector('.tabPanelContent');
              clone.id = `tab-panel-${tabs[i].id}`
              content.innerHTML = tabs[i].content
              if (i == 0) {
                clone.hidden = false
                clone.dataset.ariaHidden = false
              }
          }
      return clones
}

const initCloneFromTemplate = (forId, templateId) => {
      let template = document.getElementById(templateId),
          clone = template.content.cloneNode(true),
          topElem = clone.children[0];

      topElem.id = `${forId}-${templateId}`
      topElem.dataset.target = forId
      return clone
}
