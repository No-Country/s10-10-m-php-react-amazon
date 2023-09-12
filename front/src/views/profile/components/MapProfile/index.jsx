import { Button, Spinner } from "@material-tailwind/react";
import { useJsApiLoader } from "@react-google-maps/api";
import { Toaster, toast } from "sonner";
import { useEffect, useRef, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import MapsHeader from "./components/maps-header";
import MapsForm from "./components/maps-form";
import MapsMap from "./components/maps-map";
import { navigate } from "wouter/use-location";
import { useDispatch, useSelector } from "react-redux";
import { signUpLocation } from "../../../../api/authApi";
import { setLocation } from "../../../../features/userSlice";

library.add(faLocationDot, faCrosshairs);

const MapProfile = () => {
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
      postal_code: "123",
    };

    signUpLocation(updatedData, user.token)
      .then((response) => {
        if (response.status == 200) {
          toast("Se guardaron los cambios");
          setTimeout(() => {
            dispatch(setLocation(updatedData));
            navigate("/user/profile");
          }, 2500);
        } else {
          toast("Error al ingresar su ubicación");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex flex-col p-5 items-center justify-center">
        <MapsHeader />
        <div className="bg-colorNeutral3 rounded-lg ">
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
            setCity={setCity}
            setProvince={setProvince}
          />

          <Button
            className="rounded-full normal-case w-[310px] bg-buttonFilledColor m-8 mb-16 text-colorPrimary text-md"
            type="submit"
            onClick={submit}
          >
            Guardar
          </Button>
          <Toaster position="bottom-right" richColors />
        </div>
      </div>
    </>
  );
};

export default MapProfile;
