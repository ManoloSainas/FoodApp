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
  faDoorOpen,
  faSpinner
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
  ShoppingCart: faBagShopping, // DA CAMBIARE!
  DoorOpen: faDoorOpen, // DA CAMBIARE!
  Loading: faSpinner // fa-spin-pulse
  // AGGIUNGERE LE ALTRE ICONE
}
export type IconName = keyof typeof iconsSet

// You can change the size of Font Awesome icons by using the size prop.
// The size prop accepts values like "xs", "lg", "sm", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"
