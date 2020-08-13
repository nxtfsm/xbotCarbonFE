// multiselectAnimations.js
import { classToggler } from '../helperFuncs'

export const eventHandlers = element => {
  const topListBox = element.querySelector('.bx--list-box'),
        topListButton = element.querySelector(".bx--list-box__field[role='button']"),
        menuItems = element.querySelectorAll('.bx--list-box__menu-item');

      topListButton.addEventListener('click', function()
        { dropdownToggler(this, topListBox) })

      for (let item of menuItems) { item.addEventListener('click', function() {
        { itemSelector(this) } })}

      document.addEventListener('click', function(e) {
        if (topListButton.getAttribute('aria-expanded') == 'true') {
          let targetElem = e.target;
          do {
            if (targetElem == topListBox) { return }
            targetElem = targetElem.parentNode;
          } while(targetElem);
          dropdownToggler(topListButton, topListBox)
        }
      })
}

const dropdownToggler = (button, listBox) => {
  let expanded = button.getAttribute('aria-expanded'),
      aLabel = button.getAttribute('aria-label'),
      menuIcon = button.querySelector(".bx--list-box__menu-icon"),
      boxPseudoClasses = ['bx--list-box--expanded', 'bx--multi-select--selected'];

      for (let c of boxPseudoClasses) { classToggler(listBox, c) }

      if (expanded == 'true') { expanded = 'false', aLabel = 'open menu' }
        else { expanded = 'true', aLabel = 'close menu' }

      button.setAttribute('aria-expanded', expanded)
      button.setAttribute('aria-label', aLabel)
      gsap.to(menuIcon, { rotateZ: "+=180deg", transformOrigin: "center center" })
}

const itemSelector = menuItem => {
  const checkbox = menuItem.querySelector('input')
  if (checkbox.checked) { checkbox.checked = false} else { checkbox.checked = true }
}
