import Versions from './components/Versions'
import MapComponent from './components/Map'
import Navbar from './components/Navbar'

function App(): React.JSX.Element {
  return (
    <>
      <Navbar></Navbar>
      <MapComponent></MapComponent>
      <Versions></Versions>
    </>
  )
}

export default App
