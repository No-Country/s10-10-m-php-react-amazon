import { Button, Spinner } from "@material-tailwind/react";
import { useJsApiLoader } from "@react-google-maps/api";
import { Toaster, toast } from "sonner";

import React, { useEffect, useRef, useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import MapsHeader from "./components/maps-header";
import MapsForm from "./components/maps-form";
import MapsMap from "./components/maps-map";
import { signUpLocation, signUpUser } from "../../../../../../api/authApi";
import { navigate } from "wouter/use-location";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../../../../features/userSlice";

library.add(faLocationDot, faCrosshairs);

const Maps = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
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
  const [city, setCity] = useState(null);
  const [province, setProvince] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
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

  const submit = async () => {
    const updatedData = {
      address: direction,
      province: province,
      city: city,
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
      postal_code: "123"
    };

    signUpLocation(updatedData, user.token).then((response) => {
      if (response.status == 200) {
        toast("Su registro fue exitoso");
        setTimeout(() => {
          dispatch(setToken(""))
          navigate("/auth/user/login");
        }, 2500);
      } else {
        toast("Error al ingresar su ubicación");
      }
    }).catch((err) => {
      console.log(err)
    });
  };

  return (
    <div className="flex flex-col items-center h-screen bg-mainColor">
      <MapsHeader />
      <MapsForm
        map={map}
        setMark={setMark}
        setSelectedLocation={setSelectedLocation}
        originRef={originRef}
        setDirection={setDirection}
        setCity={setCity}
        setProvince={setProvince}
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
        className="rounded-full w-widthMainBtn h-heightMainBtn mt-5 custom-buttonCTAs"
        type="submit"
        onClick={submit}
      >
        Registrarse
      </Button>
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default Maps;
