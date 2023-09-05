import React from "react";

import { Spinner } from "@material-tailwind/react";
import { useJsApiLoader } from "@react-google-maps/api";

import { useEffect, useRef, useState } from "react";

import Map from "../../../components/Map";
import { products } from "../../../utils/products";

const DashboardMap = ({ userLatitude, userLongitude, setBusiness, business }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState({});
  const [selectedLocation, setSelectedLocation] = useState({
    lat: userLatitude,
    lng: userLongitude,
  });
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [mark, setMark] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const calculateRoute = async (destinationLocation) => {
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: selectedLocation,
      destination: destinationLocation,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    return results.routes[0].legs[0].distance.text;
  };

  useEffect(() => {
    if (isLoaded) {
      const calculateDistances = async () => {
        const updatedShops = await Promise.all(
          business.map(async (item) => {
            const { location } = item;
            try {
              const distance = await calculateRoute(location);
              return { ...item, distance };
            } catch (error) {
              console.error("Error al calcular la distancia:", error);
              return { ...item, distance: "Error" };
            }
          })
        );
  
        setBusiness(updatedShops); 
        setIsLoading(false);
      };
  
      calculateDistances();
    }
  
    setTimeout(() => {
      setMark(selectedLocation);
    }, 1000);
  }, [isLoaded, selectedLocation]);
  
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Map
        selectedLocation={selectedLocation}
        setMap={setMap}
        directionsResponse={directionsResponse}
        mark={mark}
      />
    </div>
  );
};

export default DashboardMap;
