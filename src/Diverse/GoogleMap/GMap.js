import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const center = { lat: -34.397, lng: 150.644 };

export function GMap() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  });

  if (loadError) {
    return <div style={{ padding: "40px" }}>Map failed to load.</div>;
  }

  if (!isLoaded) {
    return <div style={{ padding: "40px" }}>Loading map…</div>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={center}
        zoom={8}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
