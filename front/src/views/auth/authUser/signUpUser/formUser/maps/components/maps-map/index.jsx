import { GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";

const MapsMap = ({selectedLocation, setMap,setMark, setDirection, originRef, mark, setCity, setProvince}) => {
  const dragPoint = async (e) => {
    const newPosition = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };

    setMark(newPosition);

    const geocoder = new window.google.maps.Geocoder();
    await geocoder.geocode({ location: newPosition }, (results, status) => {
      if (status === "OK" && results.length > 0) {
        originRef.current.value = results[0].formatted_address;
        setDirection(originRef.current.value);
        setProvince(results[0].address_components[results[0].address_components.length-2])
        setCity(results[0].address_components[results[0].address_components.length-3])
      } else {
        console.error(
          "Reverse geocode was not successful for the following reason:",
          status
        );
      }
    });
  };
  return (
    <section className="container mx-auto h-96 mt-6 flex justify-center">
      <GoogleMap
        center={selectedLocation}
        zoom={15}
        mapContainerStyle={{ width: "80%", height: "100%", borderRadius: "2rem" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        <>
          {mark && (
            <Marker
              position={mark}
              animation="DROP"
              draggable={true}
              onDragEnd={dragPoint}
            />
          )}
        </>
      </GoogleMap>
    </section>
  );
};

export default MapsMap;
