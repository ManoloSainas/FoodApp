import {
  faLayerGroup,
  faHouse,
  faLocationDot,
  faMinus,
  faPlus,
  faTableCellsLarge,
  faTruckFast,
  faSliders,
  faFire,
  faHeart,
  faCheck,
  faTruck,
  faXmark,
  faBell,
  faBars,
  faBagShopping,
  faDoorOpen
} from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const iconsSet = {
  Plus: faPlus,
  AngleBracket: faChevronRight,
  SearchLens: faMagnifyingGlass,
  Minus: faMinus,
  Home: faHouse,
  Catalog: faLayerGroup,
  Category: faTableCellsLarge, // DA CAMBIARE!
  Map: faLocationDot,
  Delivery: faTruckFast,
  Settings: faSliders,
  Flame: faFire,
  Heart: faHeart,
  Check: faCheck,
  Truck: faTruck,
  Xmark: faXmark,
  Bell: faBell,
  Bars: faBars, // DA CAMBIARE!
  BagShopping: faBagShopping, // DA CAMBIARE!
  DoorOpen: faDoorOpen, // DA CAMBIARE!
  noIcon: null // INSERIRE ICONA VUOTA
  // AGGIUNGERE LE ALTRE ICONE
}
export type IconName = keyof typeof iconsSet
