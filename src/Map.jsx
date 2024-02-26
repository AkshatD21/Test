import React from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Card from "./Card";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

function Map() {
  const [response, setResponse] = React.useState(null);
  const [directions, setDirections] = React.useState(null);
  const [travelMode, setTravelMode] = React.useState("DRIVING");
  const [origin, setOrigin] = React.useState("37.7878, -122.43"); // Default origin
  const [destination, setDestination] = React.useState("37.7878, -122.4376"); // Default destination

  const directionsCallback = React.useCallback((res) => {
    if (res !== null) {
      setResponse(res);
    }
  }, []);

  const onTravelModeChange = React.useCallback((event) => {
    setTravelMode(event.target.value);
  }, []);

  return (
    <>
      <LoadScript googleMapsApiKey= {import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY} >
        <div>
          <label>
            Origin:
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </label>
          <label>
            Destination:
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </label>
        </div>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={50}>
          <DirectionsService
            options={{
              destination: destination, // Use the state for destination
              origin: origin, // Use the state for origin
              travelMode: travelMode,
            }}
            callback={directionsCallback}
          />

          {response && (
            <DirectionsRenderer options={{ directions: response }} />
          )}
        </GoogleMap>
      </LoadScript>
      <Card />
    </>
  );
}

export default Map;
