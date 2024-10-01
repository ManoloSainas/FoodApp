import { symbols } from '../../Components/Price'

export type MyCurrency = {
  currency: keyof typeof symbols
}
