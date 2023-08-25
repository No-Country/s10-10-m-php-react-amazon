import { Button, Spinner } from "@material-tailwind/react";
import { useJsApiLoader } from "@react-google-maps/api";

import React, { useEffect, useRef, useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import MapsHeader from "./components/maps-header";
import MapsForm from "./components/maps-form";
import MapsMap from "./components/maps-map";

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
    <div className="flex flex-col items-center h-screen bg-[#52525B]">
      <MapsHeader />
      <MapsForm
        map={map}
        setMark={setMark}
        setSelectedLocation={setSelectedLocation}
        originRef={originRef}
      />
      <MapsMap
        selectedLocation={selectedLocation}
        setMap={setMap}
        mark={mark}
        setMark={setMark}
        setDirection={setDirection}
        originRef={originRef}
      />
      <Button
        variant="gradient"
        fullWidth
        className="rounded-full w-widthMainBtn h-heightMainBtn mt-5"
        type="submit"
      >
        Registrarse

      </Button>
    </div>
  );
};

export default Maps;
