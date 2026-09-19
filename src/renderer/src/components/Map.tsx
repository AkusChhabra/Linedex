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
      zoom: 2,
      center: [0, 0],
      hash: true,
      attributionControl: false,
      //style: 'https://demotiles.maplibre.org/globe.json'
      style: {
        version: 8,
        sources: {
          satellite: {
            type: 'raster',
            tiles: [
              'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
              'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
              'https://mt2.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
              'https://mt3.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            ],
            tileSize: 256
          }
        },
        layers: [
          {
            id: 'satellite',
            type: 'raster',
            source: 'satellite'
          }
        ]
      }
    })

    map.on('load', () => {
      console.log('MapLibre map loaded successfully.')
    })

    map.on('error', (event) => {
      console.error('MapLibre error:', event.error)
    })

    return () => {
      map.remove()
    }
  }, [])

  return (
    <>
      <div ref={mapContainer} style={{ width: '100%', height: 'calc(100vh - 120px)' }}></div>
    </>
  )
}

export default MapComponent
