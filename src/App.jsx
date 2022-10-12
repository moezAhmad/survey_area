import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import styled from "styled-components";
import LocationMarker from "./location_marker";
import RecenterAutomatically from "./recenter_map";
import MarkersContext from "./services/markers/markers_context";

const Map = styled(MapContainer)`
  height: 100vh;
`;
const App = () => {
  const [position, setPosition] = useState([33.684422, 73.047882]);
  const { canAdd, setCanAdd } = useContext(MarkersContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      if (pos) {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      }
    });
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCanAdd((prev) => !prev);
        }}
      >
        {!canAdd ? `Add Markers` : `Done Adding`}
      </button>
      <Map center={position} zoom={13} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <RecenterAutomatically lat={position[0]} lng={position[1]} />
        <LocationMarker />
      </Map>
    </>
  );
};

export default App;
