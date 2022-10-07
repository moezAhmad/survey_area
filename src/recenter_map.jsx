import { useEffect } from "react";
import { useMap } from "react-leaflet";
import PropTypes from "prop-types";

const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng]);
  return null;
};
RecenterAutomatically.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};
RecenterAutomatically.defaultProps = {
  lat: 33.684422,
  lng: 73.047882,
};
export default RecenterAutomatically;
