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
const Dashboard = () => {
  const [business, setBusiness] = useState(shops);
  const [title, setTitle] = useState("Los más deseados");
  const [items, setItems] = useState(productsFindShop(business));
  const user = useSelector((state) => state.user);
  const [showFilter, setShowFilter] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="p-3 h-screen">
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
          items={items}
          setItems={setItems}
          setTitle={setTitle}
          showMap={showMap}
          setShowMap={setShowMap}
        />
      </div>
      {showMap ? (
        <DashboardMap
          userLatitude={-31.444961}
          userLongitude={-64.1850551}
          setBusiness={setBusiness}
          business={business}
        />
      ) : (
        <>
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faMap} className="text-2xl m-2" />
            <span className="underline decoration-1">
              {user.province ? user.province : "CABA, Caballito"}
            </span>
          </div>
          <h1 className="text-sizeTitle font-weightTitle">{title}</h1>
          <div className="flex justify-center w-full">
            <ItemListContainer products={items} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
