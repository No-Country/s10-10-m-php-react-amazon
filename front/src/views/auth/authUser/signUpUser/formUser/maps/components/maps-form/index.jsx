import { Button, Input } from "@material-tailwind/react";
import { Autocomplete } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MapsForm = ({
  setSelectedLocation,
  map,
  originRef,
  setMark,
  setDirection,
  setCity,
  setProvince,
}) => {
  const markPoint = async () => {
    if (originRef.current.value === "") {
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    await geocoder.geocode(
      { address: originRef.current.value },
      (results, status) => {
        if (status === "OK" && results.length > 0) {
          setProvince(
            results[0].address_components[
              results[0].address_components.length - 2
            ]
          );
          setCity(
            results[0].address_components[
              results[0].address_components.length - 3
            ]
          );
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
          const geocoder = new window.google.maps.Geocoder();
          geocoder.geocode({ location: userLocation }, (results, status) => {
            console.log(results);
            if (status === "OK" && results.length > 0) {
              originRef.current.value = results[0].formatted_address;
              setDirection(originRef.current.value);
              setProvince(
                results[0].address_components[
                  results[0].address_components.length - 2
                ].long_name
              );
              setCity(
                results[0].address_components[
                  results[0].address_components.length - 3
                ].long_name
              );
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
    <section>
      <p className="text-sm">Selecciona tu ubicación</p>
      <div>
        <Autocomplete>
          <Input
            type="text"
            placeholder="Ingresa tu domicilio"
            inputRef={originRef}
            size="md"
            className="!border !border-gray-300 bg-white text-gray-900  placeholder:text-colorNeutral1"
            labelProps={{
              className: "hidden",
            }}
          />
        </Autocomplete>
      </div>
      <div>
        <Button
          variant="text"
          className="rounded-full custom-label mt-8"
          onClick={getUserLocation}
        >
          <FontAwesomeIcon icon="crosshairs" className="text-black" />
          <span className="px-3 normal-case text-colorPrimary">
            Utilizar mi ubicación actual
          </span>
        </Button>
      </div>
    </section>
  );
};

export default MapsForm;
