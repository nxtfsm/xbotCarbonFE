// sectionConfigs.js
export const initSections = fromConfigs => {
  const keys = Object.keys(fromConfigs),
        sections = [];

  keys.forEach((key, i) => {
    let conf = fromConfigs[key]
    sections.push(new TopLevelSection(conf.mainId, conf.displayTitle, {tabs: conf.tabs}))
  })

  return sections
}

class TopLevelSection {
  constructor(mainId, displayTitle, options) {
    const defaults = {
      contentWindow: new ContentWindow(mainId)
    }

    this.mainId = mainId,
    this.displayTitle = displayTitle
    this.config = Object.assign({}, defaults, options)

    if (options.tabs) {
      if (options.tabs.length > 0)
        { this.config.contentWindow = new TabbedContentWindow(mainId, options.tabs) }
    }
  }
}

class ContentWindow {
  constructor(inSectionId) {
    this.inSectionId = inSectionId,
    this.type = "blank"
  }
}

class TabbedContentWindow extends ContentWindow {
  constructor(inSectionId, tabs) {
    super(inSectionId)
    this.type = "tabbed",
    this.tabs = tabs.map( (tab) => { return new TabSection(tab.title, tab.content) })
  }
}

class TabSection {
  constructor(title, content) {
    this.title = title,
    this.content = content
  }
}
