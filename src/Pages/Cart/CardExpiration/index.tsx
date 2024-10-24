import { Input } from '../../../shared components/Input'
import { Select } from '../../../shared components/Select'
import { Stack } from '../../../shared components/Stack'
import { months, years } from '../../../constants/'

export const CardExpiration = () => {
  return (
    <Stack>
      <Select
        arialLabel="months"
        elements={months}
        onChange={() => console.log('changed!')}
      ></Select>
      <Select
        arialLabel="years"
        elements={years}
        onChange={() => console.log('changed!')}
      ></Select>
      <Input
        onChange={() => console.log('date changed')}
        type="hidden"
        id="expiry"
        maxLength={4}
      />
    </Stack>
  )
}
