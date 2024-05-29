import './App.css'
import { IconName } from './Components/Icon/config'
import { SideBar } from './Components/SideBar'

function App() {
  return (
    <SideBar
      onChange={(icon: IconName) => console.log(icon)}
      options={[
        { icon: 'Home', text: 'Home' },
        { icon: 'Catalog', text: 'Catalog' }
      ]}
    />
  )
}

export default App
