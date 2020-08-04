import { getAttributes, toSVG } from '@carbon/icon-helpers';
import chevronDown from '@carbon/icons/es/chevron--down/32';
import { CargoShip } from '@carbon/pictograms'
import { IdBadge } from '@carbon/pictograms'

export const iconLoader = () => {

  for (let elem of document.querySelectorAll('.iconContainer')) {
    loadIconToElem(chevronDown, elem)
  }

  for (let elem of document.querySelectorAll('#animFleetContainer .svgWrapper')) {
    CargoShip.attrs.viewBox = "18 18 12 12"
    loadIconToElem(CargoShip, elem)
  }

  for (let elem of document.querySelectorAll('.stickyButton .svgWrapper.idBadge')) {

    IdBadge.attrs.width = "64"
    IdBadge.attrs.height = "64"
    //IdBadge.attrs.path.fill = "#f4f4f4"
    loadIconToElem(IdBadge, elem)
  }

}

const loadIconToElem = (icon, elem) => {
  const iconSVG = toSVG({ ...icon, attrs: getAttributes(icon.attrs) })
  elem.appendChild(iconSVG)
}
