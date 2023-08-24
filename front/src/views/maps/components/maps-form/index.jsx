import { Button, IconButton, Input } from "@material-tailwind/react";
import { Autocomplete } from "@react-google-maps/api";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MapsForm = ({ setSelectedLocation, map, originRef, setMark }) => {
  const markPoint = async () => {
    if (originRef.current.value === "") {
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    await geocoder.geocode(
      { address: originRef.current.value },
      (results, status) => {
        if (status === "OK" && results.length > 0) {
          const location = results[0].geometry.location;
          setSelectedLocation({ lat: location.lat(), lng: location.lng() });
        } else {
          console.error(
            "Geocode was not successful for the following reason:",
            status
          );
        }
      }
    );
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setSelectedLocation(userLocation);
          setMark(userLocation);
          // Actualizar el valor del input con la dirección
          const geocoder = new window.google.maps.Geocoder();
          geocoder.geocode({ location: userLocation }, (results, status) => {
            if (status === "OK" && results.length > 0) {
              originRef.current.value = results[0].formatted_address;
            }
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  };
  return (
    <section className="container mx-auto flex justify-center w-full">
      <div className="flex flex-col space-y-2 w-full items-center">
        <label className="text-white">Selecciona tu ubicación</label>
        <div className="flex space-x-2 w-full justify-center shrink px-3">
          <Autocomplete  className="w-96">
            <Input
              type="text"
              placeholder="Origin"
              inputRef={originRef}
              color="white"
              size="md"
              className="w-80"
             
            />
          </Autocomplete>
          <IconButton
            className="rounded-full"
            color="white"
            onClick={markPoint}
          >
            <FontAwesomeIcon icon="location-dot" />
          </IconButton>
        </div>
        <div>
          <Button
            variant="text"
            className="rounded-full"
            color="white"
            onClick={getUserLocation}
          >
            <FontAwesomeIcon icon="crosshairs" />
            <span className="px-3">Utilizar tu ubicación actual</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MapsForm;
