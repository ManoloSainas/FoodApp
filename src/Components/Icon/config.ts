import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const iconsSet = {
  plus: faPlus,
  angleBracket: faChevronRight,
  searchLens: faMagnifyingGlass
}

export type IconName = keyof typeof iconsSet