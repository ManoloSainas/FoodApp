import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";


export const iconsSet = {
  plus: faPlus,
  angleBracket: faChevronRight,
};

export type IconName = keyof typeof iconsSet;

