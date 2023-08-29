import { Button, IconButton, Input } from "@material-tailwind/react";
import { Autocomplete } from "@react-google-maps/api";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MapsForm = ({ setSelectedLocation, map, originRef, setMark, setDirection }) => {
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
              setDirection(originRef.current.value)
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
    <section className="container mx-auto flex justify-center w-96">
      <div className="flex flex-col space-y-2 w-full items-center">
        <label className="w-full  custom-label">Selecciona tu ubicación</label>
        <div className="flex space-x-2 w-full shrink ">
          <Autocomplete  className="w-96">
            <Input
              type="text"
              placeholder="Origin"
              inputRef={originRef}
              size="md"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              containerProps={{ className: "min-w-[100px]" }}
              labelProps={{
                className: "hidden",
              }}
             
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
            className="rounded-full custom-label"
            color="white"
            onClick={getUserLocation}
          >
            <FontAwesomeIcon icon="crosshairs" className="text-white"/>
            <span className="px-3">Utilizar tu ubicación actual</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MapsForm;
