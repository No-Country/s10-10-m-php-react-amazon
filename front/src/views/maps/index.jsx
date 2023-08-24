import { Button, IconButton, Input, Spinner } from "@material-tailwind/react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
library.add(faLocationDot, faCrosshairs);

const Maps = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [map, setMap] = useState(/** @type google.maps.Map */(null));
  const [direction, setDirection] = useState(null);
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  const [selectedLocation, setSelectedLocation] = useState({
    lat: -31.4458799,
    lng: -64.18070480000002,
  });
  const [mark, setMark] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

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
      } else {
        console.error(
          "Reverse geocode was not successful for the following reason:",
          status
        );
      }
    });
  };

  useEffect(() => {
    if (isLoaded) {
      setIsLoading(false);
    }

    setTimeout(() => {
      setMark(selectedLocation);
    }, 1000);
  }, [isLoaded, selectedLocation]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col items-center h-screen bg-mainColor py-[2rem]">
      <h2 className="font-bold text-customSizeTitle text-white p-10 text-center">
        Enhorabuena estás a un paso de salvar comida
      </h2>
      <section className="container mx-auto flex justify-center">
        <div className="flex flex-col space-y-2 w-96 px-[2-rem]">
          <label className="text-secondColorTextForms">Selecciona tu ciudad</label>
          <div className="flex space-x-2 w-96">
            <Autocomplete className="w-80">
              <Input
                type="text"
                placeholder="Origin"
                inputRef={originRef}
                color="white"
              />
            </Autocomplete>
            <IconButton
              className="rounded-full"
              color="white"
              onClick={markPoint}
            >
              <FontAwesomeIcon icon="location-dot" />
            </IconButton>
            <IconButton
              className="rounded-full"
              color="white"
              onClick={() => map.panTo(center)}
            >
              <FontAwesomeIcon icon="crosshairs" />
            </IconButton>
          </div>
        </div>
      </section>
      <section
        className="container mx-auto h-96 mt-6 flex justify-center items-center"
      >
        <GoogleMap
          center={selectedLocation}
          zoom={15}
          mapContainerStyle={{ width: "90%", height: "90%", borderRadius: "20px" }}
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

      <Button variant="gradient" fullWidth className="rounded-full w-widthMainBtn m-8" type="submit">
        Continuar
      </Button>
    </div>
  );
};

export default Maps;
