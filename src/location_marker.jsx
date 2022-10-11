import React, { useState } from "react";
import { Marker, Polygon, Popup, useMapEvents } from "react-leaflet";

const LocationMarker = () => {
  const [markers, setMarkers] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const map = useMapEvents({
    click: (e) => {
      setMarkers((prevMarkers) => [
        ...prevMarkers,
        [e.latlng.lat, e.latlng.lng],
      ]);
    },
  });
  const removeMarker = (pos) => {
    setMarkers((prevMarkers) =>
      prevMarkers.filter(
        (prevCoord) => JSON.stringify(prevCoord) !== JSON.stringify(pos)
        // or (coord) => coord.lat !== pos.lat && coord.lng !== pos.lng
      )
    );
  };
  return markers.length < 1 ? null : (
    <>
      {markers.map((marker) => (
        <Marker
          key={`${marker}`}
          position={marker}
          eventHandlers={{
            click: () => {
              removeMarker(marker);
            },
          }}
        >
          <Popup>
            <button type="button">Remove marker</button>
          </Popup>
        </Marker>
      ))}
      <Polygon positions={markers} />
    </>
  );
};
export default LocationMarker;
