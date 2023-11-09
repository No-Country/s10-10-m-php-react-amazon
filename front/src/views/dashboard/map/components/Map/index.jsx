import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

import shopIcon from "../../../../../assets/icons/shop-solid.svg";

import MapItemList from "../MapItemList";
const Map = ({
  selectedLocation,
  setMap,
  directionsResponse,
  mark,
  filters,
  business,
  libraries
}) => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const handleMarkerClick = (business) => {
    setSelectedBusiness(business);
  };

  const calculateRoute = async (destinationLocation) => {
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: selectedLocation,
      destination: destinationLocation,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    return results.routes[0].legs[0].distance.text;
  };

  const loadData = async (business) => {
    if (isLoaded && business) {
      const latitude = business.location.latitude;
      const lat = parseFloat(latitude);
      const longitude = business.location.longitude;
      const lng = parseFloat(longitude);
      try {
        const distance = await calculateRoute({ lat, lng });
        return { ...business, distance };
      } catch (error) {
        
      }
    }
  };

  useEffect(() => {
    loadData(selectedBusiness).then((response) => {
      setSelectedBusiness(response);
    });
  }, [isLoaded]);

  return (
    <section
      className={
        filters.view == "map"
          ? "h-screen mt-6 flex justify-center w-screen"
          : "h-0 w-0"
      }
    >
      <div
        style={{
          width: "100%",
          maxHeight: "calc(100vh - 100px)", 
          position: "relative",
        }}
      >
        <GoogleMap
          center={selectedLocation}
          zoom={15}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            
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
        <div className="absolute bottom-0 w-full">
          <MapItemList selectedBusiness={selectedBusiness} />
        </div>
      </div>
    </section>
  );
};

export default Map;
