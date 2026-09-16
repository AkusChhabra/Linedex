import { useEffect, useRef } from 'react'
import { Map, setWorkerUrl } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'

setWorkerUrl(workerUrl)

function MapComponent(): React.JSX.Element {
  //const mapContainer = useRef<HTMLDivElement>(null) // Create a reference for the map container

  const mapContainer = useRef<HTMLDivElement>(null)
  //const map = useRef<maplibregl.Map | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    const map = new Map({
      container: mapContainer.current,
      style: 'https://demotiles.maplibre.org/globe.json',
      center: [0, 0],
      zoom: 1,
      hash: true,
      attributionControl: false
    })

    return () => {
      map.remove()
    }
  }, [])

  return (
    <>
      <div ref={mapContainer} style={{ width: '100%', height: '400px' }}></div>
    </>
  )
}

export default MapComponent
