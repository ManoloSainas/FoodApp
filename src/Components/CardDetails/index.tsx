import { Input } from '../Form/Input'

export const CardDetails = () => {
  return (
    <>
      <Input type="text" id="nameId" onChange={(value) => console.log(value)} />
      <label htmlFor="nameId">Name and surname</label>
    </>
  )
}
