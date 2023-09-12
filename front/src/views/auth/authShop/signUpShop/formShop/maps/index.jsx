import { useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import MapsForm from "./maps-form";

const Maps = ({ setData, data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mark, setMark] = useState(null);
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [direction, setDirection] = useState(null);
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  const [selectedLocation, setSelectedLocation] = useState({
    lat: -31.4458799,
    lng: -64.18070480000002,
  });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  useEffect(() => {
    if (isLoaded) {
      setIsLoading(false);
    }
  }, [isLoaded, data]);

  if (isLoading) {
    return;
  }

  const submit = async () => {
    const updatedData = {
      ...data,
      address: direction,
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
    setData(updatedData);
  };

  return (
    <div>
      <MapsForm
        map={map}
        setMark={setMark}
        setSelectedLocation={setSelectedLocation}
        originRef={originRef}
        setDirection={setDirection}
      />
    </div>
  );
};

export default Maps;
