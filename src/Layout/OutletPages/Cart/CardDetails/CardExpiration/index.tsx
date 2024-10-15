import { months, years } from '../../../../../constants'
import { Input } from '../../../../../Shared Components/Input'
import { Select } from '../../../../../Shared Components/Select'
import { Stack } from '../../../../../Shared Components/Stack'

export const CardExpiration = () => {
  return (
    <Stack>
      <Select elements={months} onChange={() => console.log('changed!')}></Select>
      <Select elements={years} onChange={() => console.log('changed!')}></Select>
      <Input
        onChange={() => console.log('date changed')}
        type="hidden"
        id="expiry"
        maxLength={4}
      />
    </Stack>
  )
}
