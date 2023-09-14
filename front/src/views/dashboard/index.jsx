import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { InputSearch } from "../../components/InputSearch";
import ItemListContainer from "../../components/itemListContainer";
import { products } from "../../utils/products";
import { faMap, faSliders } from "@fortawesome/free-solid-svg-icons";
import DashboardMap from "./map";
import { shops } from "../../utils/shops";
import { productsFindShop } from "../../utils/products/functions";
import { useSelector } from "react-redux";
import DialogFilter from "../../components/DialogFilter";
import { getPacksByFilters } from "../../api/itemApi";
import { Spinner } from "@material-tailwind/react";
import { useRoute } from "wouter";

const Dashboard = () => {
  const [match, params] = useRoute("/dashboard/:category");
  const category = match ? params.category : null
  const [business, setBusiness] = useState([]);
  const user = useSelector((state) => state.user);
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({today: true, category: category !== null ? [category] : ["panaderia", "verduleria", "supermercado"], order: "price", view: "list"});
  const userLatitude = user.location?.latitude;
  const lat = parseFloat(userLatitude);
  const userLongitude = user.location?.longitude;
  const lng = parseFloat(userLongitude);
  const handleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div
      className={
        isLoading || !business || business.length == 0 ? "p-3 h-screen" : "p-3"
      }
    >
      <div className="p-5 flex items-center justify-center">
        <InputSearch />

        <FontAwesomeIcon
          icon={faSliders}
          className="rotate-90 text-2xl m-2 cursor-pointer"
          onClick={handleFilter}
        />
        <DialogFilter
          open={showFilter}
          handleOpen={handleFilter}
          filters={filters}
          setFilters={setFilters}

        />
      </div>
      <div className="flex items-center justify-center w-full">
          <FontAwesomeIcon icon={faMap} className="text-2xl m-2" />
          <span className="underline decoration-1">
            {user.location.province || "CABA, Caballito"}
          </span>
        </div>
        <DashboardMap
          userLatitude={lat || -31.444961}
          userLongitude={lng || -64.1850551}
          setBusiness={setBusiness}
          business={business}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          filters={filters}
        />
      

      <>
        
        <div className="flex justify-center h-screen w-full">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          ) : filters.view !== "map"  && (
            <ItemListContainer business={business} />
          )}
        </div>
      </>
    </div>
  );
};

export default Dashboard;
