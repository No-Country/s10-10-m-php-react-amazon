import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";
import React, { useState } from "react";
import { products } from "../../utils/products";

import shopIcon from "../../assets/icons/shop-solid.svg";
import { Dialog } from "@material-tailwind/react";
import { DialogBusiness } from "../DialogBusiness";
const Map = ({ selectedLocation, setMap, directionsResponse, mark }) => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [showBusinessDetails, setShowBusinessDetails] = useState(false);

  const handleMarkerClick = (business) => {
    setSelectedBusiness(business);
    setShowBusinessDetails(true);
  };

  
  return (
    <section className="container mx-auto h-96 mt-6 flex justify-center">
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
              {products.map((product) => (
                <Marker
                  position={product.location}
                  animation="DROP"
                  draggable={false}
                  icon={shopIcon}
                  onClick={()=>handleMarkerClick(product)}
                />
              ))}
            </>
          )}
        </>
      </GoogleMap>
      {showBusinessDetails && <DialogBusiness setOpen={setShowBusinessDetails} open={showBusinessDetails} selectedBusiness={selectedBusiness}/>}
    </section>
  );
};

export default Map;
