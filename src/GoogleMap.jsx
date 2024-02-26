import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const CustomMap = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 51.5074, lng: -0.1278 });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [startMarker, setStartMarker] = useState(null);
  const [endMarker, setEndMarker] = useState(null);

  // const { isLoaded, loadError } = useLoadScript({
  //     googleMapsApiKey: "",
  // });

  const handleMapClick = (event) => {
    const { latLng } = event;
    const newMarker = {
      Latitude: latLng.lat(),
      Longitude: latLng.lng(),
    };

    if (startMarker) {
      const latDiff = Math.abs(startMarker.Latitude - newMarker.Latitude);
      const lngDiff = Math.abs(startMarker.Longitude - newMarker.Longitude);
      if (latDiff < 0.01 && lngDiff < 0.01) {
        setStartMarker(null);
        return;
      }
    }
    if (endMarker) {
      const latDiff = Math.abs(endMarker.Latitude - newMarker.Latitude);
      const lngDiff = Math.abs(endMarker.Longitude - newMarker.Longitude);
      if (latDiff < 0.01 && lngDiff < 0.01) {
        setEndMarker(null);
        return;
      }
    }

    if (!startMarker) {
      setStartMarker(newMarker);
    } else if (!endMarker) {
      setEndMarker(newMarker);
    } else {
    }
  };

  useEffect(() => {
    if (startMarker) {
      setMapCenter({
        lat: startMarker.Latitude,
        lng: startMarker.Longitude,
      });
    } else if (endMarker) {
      setMapCenter({
        lat: endMarker.Latitude,
        lng: endMarker.Longitude,
      });
    }
  }, [startMarker, endMarker]);
  return (
    <GoogleMap
      googleMapsApiKey="key"
      mapContainerStyle={{ height: "400px", width: "100%" }}
      center={mapCenter}
      zoom={12}
      onClick={handleMapClick}
    >
      {startMarker && (
        <Marker
          position={{
            lat: startMarker.Latitude,
            lng: startMarker.Longitude,
          }}
          label="Start"
          onClick={() => setStartMarker(null)}
        />
      )}
      {endMarker && (
        <Marker
          position={{
            lat: endMarker.Latitude,
            lng: endMarker.Longitude,
          }}
          label="End"
          onClick={() => setEndMarker(null)}
        />
      )}
    </GoogleMap>
  );
};

export default CustomMap;
