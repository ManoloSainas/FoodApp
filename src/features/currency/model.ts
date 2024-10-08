import { symbols } from '../../Composite Components/Price'

export type MyCurrency = {
  currency: keyof typeof symbols
}
