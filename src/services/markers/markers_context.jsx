import React, { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const MarkersContext = createContext();

export const MarkersProvider = ({ children }) => {
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [canAdd, setCanAdd] = useState(false);
  const value = useMemo(() => ({
    markers,
    setMarkers,
    loading,
    setLoading,
    error,
    setError,
    canAdd,
    setCanAdd,
  }));
  return (
    <MarkersContext.Provider value={value}>{children}</MarkersContext.Provider>
  );
};
export default MarkersContext;
MarkersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
