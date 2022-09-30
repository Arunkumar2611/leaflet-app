import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchData } from "../action/actionVolcano";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapView = (props) => {
  const position = [20.5937, 78.9629]

  useEffect(() => {
    const { dispatch } = props;
    dispatch(fetchData());
  }, []);

  const { loading, items, error } = props;
  console.log(items);

  if (loading) return <span>loading...</span>;
  if (error) return <span>error!</span>;

  return (
    <MapContainer center={position} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        items.map((row) =>
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

const mapStateToProps = (state) => {
  const { volcano } = state;
  console.log(volcano)
  return {
    loading: volcano.loading,
    items: volcano.data,
    error: volcano.error
  };
};

export default connect(mapStateToProps)(MapView)