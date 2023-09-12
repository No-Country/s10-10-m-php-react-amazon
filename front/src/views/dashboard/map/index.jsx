import React, { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./components/Map";
import { getPacksByFilters } from "../../../api/itemApi";
import { useSelector } from "react-redux";

const DashboardMap = ({
  userLatitude,
  userLongitude,
  setBusiness,
  business,
  setIsLoading,
  isLoading,
  filters
}) => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: userLatitude,
    lng: userLongitude,
  });
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [mark, setMark] = useState(null);
  const user = useSelector((state) => state.user);
  const [selectedShop, setSelectedShop] = useState({})
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

  const loadData = async (business) => {
    if (isLoaded && business && business.length > 0) {
      const updatedShops = await Promise.all(
        business.map(async (item) => {
          const latitude = item.location.latitude;
          const lat = parseFloat(latitude);
          const longitude = item.location.longitude;
          const lng = parseFloat(longitude);
          try {
            const distance = await calculateRoute({ lat, lng });
            return { ...item, distance };
          } catch (error) {
            
            return { ...item, distance: "Error" };
          }
        })
      );
      return updatedShops;
    }
    return [];
  };

  useEffect(() => {
    setIsLoading(true);
    getPacksByFilters("", user.token)
      .then((response) => {
        let updatedBusiness = response.data.Business;
        let filteredBusiness = updatedBusiness.filter((shop) =>
  filters.category.includes(shop.category)
);
 
        loadData(filteredBusiness).then((response) => {
          setBusiness(response);
          setIsLoading(false);
          setTimeout(() => {
            setMark(selectedLocation)
          }, 1000)
         
        });
      })
      .catch((err) => {
      });
  }, [isLoaded, setBusiness, filters]);

  return (
    <div >
      {business && business.length > 0 && (
        <Map
          selectedLocation={selectedLocation}
          setMap={setMap}
          directionsResponse={directionsResponse}
          mark={mark}
          business={business}
          filters={filters}
        />
      )}
    </div>
  );
};

export default DashboardMap;
