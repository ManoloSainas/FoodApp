import { useState } from 'react'
import './App.css'
import { Avatar } from './Components/Avatar'
import { Input } from './Components/Form/Input'
import { SearchBar } from './Components/SearchBar'
import { Stack } from './Components/Stack'
import { TagText } from './Components/TagText'

function App() {
  // const [count, setCount] = useState(0);
  // useEffect
  // useCallback
  // useMemo
  const [name, setName] = useState('dkjdkdk')
  console.log(name)

  return (
    <Stack width="100%" gap={30}>
      <TagText>ciao</TagText>
      <Avatar imageURL="src\assets\Images\food.jpg"> Ciao mondo</Avatar>
      <Input value={name} placeholder="Search..." onChange={(value) => setName(value)} />
      <SearchBar
        onChange={(value) => setName(value)}
        placeholder="Cerca..."
        variant="transparent"
        onClick={() => console.log('sono stato premuto')}
        iconName="searchLens"
      ></SearchBar>
    </Stack>
  )
}

export default App
