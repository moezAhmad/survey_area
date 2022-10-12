import React, { useContext } from "react";
import { Marker, Polygon, useMapEvents } from "react-leaflet";
import MarkersContext from "./services/markers/markers_context";

const LocationMarker = () => {
  const { markers, setMarkers, canAdd } = useContext(MarkersContext);

  // eslint-disable-next-line no-unused-vars
  const map = useMapEvents({
    click: (e) => {
      if (canAdd) {
        setMarkers((prevMarkers) => [
          ...prevMarkers,
          [e.latlng.lat, e.latlng.lng],
        ]);
      }
    },
  });
  const removeMarker = (pos) => {
    setMarkers((prevMarkers) =>
      prevMarkers.filter(
        (prevCoord) => JSON.stringify(prevCoord) !== JSON.stringify(pos)
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
        />
      ))}
      <Polygon positions={markers} />
    </>
  );
};
export default LocationMarker;
