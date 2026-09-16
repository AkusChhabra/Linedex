import Versions from './components/Versions'
import MapComponent from './components/Map'
import Navbar from './components/Navbar'

function App(): React.JSX.Element {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1>Linedex</h1>
        <p>
          Edit <code>src/renderer/App.tsx</code> and save to test HMR updates.
        </p>
        <button onClick={() => window.electron.ipcRenderer.send('ping')}>Ping</button>
      </div>

      <MapComponent></MapComponent>
      <Versions></Versions>
    </>
  )
}

export default App
