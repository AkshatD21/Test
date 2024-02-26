import React from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

function Map() {
  const [response, setResponse] = React.useState(null);
  const [directions, setDirections] = React.useState(null);
  const [travelMode, setTravelMode] = React.useState("DRIVING");

  const directionsCallback = (res) => {
    if (res !== null) {
      setResponse(res);
    }
  };

  const onTravelModeChange = (event) => {
    setTravelMode(event.target.value);
  };

  return (
    <LoadScript googleMapsApiKey="UR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <DirectionsService
          options={{
            destination: "37.7878, -122.4376", // Destination latitude and longitude
            origin: "37.7749, -122.4194", // Origin latitude and longitude
            travelMode: travelMode,
          }}
          callback={directionsCallback}
        />

        {response && <DirectionsRenderer options={{ directions: response }} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
