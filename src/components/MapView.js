import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const MapView = () => {
  const position = [20.5937, 78.9629]
  const [dataset, setDataset] = useState();

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/arfbramboll/259078f1a1ac6b79619cc49a3c120dea/raw/8a3b6c2a081b3e89b446d9d52678e6112f6f43dc/volcanoes.json')
            .then((data) => setDataset(data.data));
    }, [])

  return (
    <MapContainer center={position} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        dataset?.features.map((row) => 
        <Marker 
        key={row.properties.VolcanoID}
        position={[
          row.geometry.coordinates[1],
          row.geometry.coordinates[0],
        ]}>
          <Popup>
            <p><b>Volcano Name: </b> {row.properties.V_Name}</p>
            <p><b>Country: </b> {row.properties.Country}</p>
            <p><b>Region: </b> {row.properties.Region}</p>
            
          </Popup>
        </Marker>
      )
      }
    </MapContainer>
  )
}

export default MapView