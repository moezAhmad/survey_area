import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import styled from "styled-components";

const Map = styled(MapContainer)`
  height: 100vh;
`;
const App = () => (
  <Map center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </Map>
);

export default App;