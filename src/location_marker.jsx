import React, { useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";

const LocationMarker = () => {
  const [markers, setMarkers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const map = useMapEvents({
    click: (e) => {
      setMarkers((prevMarkers) => [...prevMarkers, e]);
    },
    // locationfound: (e) => {
    //   setPosition(e.latlng);
    //   // map.flyTo(e.latlng, map.getZoom());
    // },
  });

  return markers.length < 1
    ? null
    : markers.map((marker) => (
        <Marker key={`${marker.latlng}`} position={marker.latlng} />
      ));
};
export default LocationMarker;
