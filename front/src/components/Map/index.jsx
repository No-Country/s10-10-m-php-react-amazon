import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { shops } from "../../utils/shops";

import shopIcon from "../../assets/icons/shop-solid.svg";
import { Dialog } from "@material-tailwind/react";
import { DialogBusiness } from "../DialogBusiness";
const Map = ({
  selectedLocation,
  setMap,
  directionsResponse,
  mark,
  filters,
  business,
}) => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [showBusinessDetails, setShowBusinessDetails] = useState(false);
  const handleMarkerClick = (business) => {
    setSelectedBusiness(business);
    setShowBusinessDetails(true);
  };

  
  return (
  <section className={filters.view == "map" ? "container mx-auto h-96 mt-6 flex justify-center" : "h-0 w-0"}>
    <GoogleMap
      center={selectedLocation}
      zoom={15}
      mapContainerStyle={{
        width: "80%",
        height: "100%",
        borderRadius: "2rem",
      }}
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
          <>
            <Marker position={mark} animation="DROP" draggable={false} />
            {business.map((shop) => {
              const latitude = shop.location.latitude;
              const lat = parseFloat(latitude);
              const longitude = shop.location.longitude;
              const lng = parseFloat(longitude);

              return (
                <Marker
                  key={shop.id}
                  position={{ lat, lng }}
                  animation="DROP"
                  draggable={false}
                  icon={shopIcon}
                  onClick={() => handleMarkerClick(shop)}
                />
              );
            })}
          </>
        )}
      </>
    </GoogleMap>

    {showBusinessDetails && (
      <DialogBusiness
        setOpen={setShowBusinessDetails}
        open={showBusinessDetails}
        selectedBusiness={selectedBusiness}
      />
    )}
  </section>
  )
};

export default Map;
