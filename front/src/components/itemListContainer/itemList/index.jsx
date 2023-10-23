import React, { useEffect, useState } from "react";
import Item from "./item";

const ItemList = ({ business, filters }) => {
  const [filteredPackList, setFilteredPackList] = useState([]);
  useEffect(() => {
    const updatedpacklist = business.flatMap((shop) =>
      shop.pack.map((item) => ({
        item,
        shop,
      }))
    );
    filterProducts(updatedpacklist);
  }, [business, filters]);
  
  let filterProducts = (updatedpacklist) => {
    let filteredPackList = [...updatedpacklist]; // Copia original
  
    if (filters.order == "price") {
      filteredPackList = filteredPackList.sort(
        (a, b) => a.item.price - b.item.price
      );
    } else if (filters.order == "distance") {
      filteredPackList = filteredPackList.sort(
        (a, b) => a.shop.distance - b.shop.distance
      );
    } else if (filters.order == "date") {
      filteredPackList = filteredPackList.sort(
        (a, b) => new Date(a.item.created_at) - new Date(b.item.created_at)
      );
    }
    if (filters.all !== true) {
      filteredPackList = filteredPackList.filter(
        (pack) => pack.item.stock != 0
      );
    }
    if (filters.search !== "") {
      filteredPackList = filteredPackList.filter((pack) =>
        pack.item.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
  
    setFilteredPackList(filteredPackList);
  };

  return (
    <div className="w-screen overflow-hidden">
      <div className="flex flex-wrap h-screen justify-center overflow-y-auto">
        {filteredPackList.map((pack) =>
          pack ? <Item pack={pack} key={pack.item.id} /> : null
        )}
      </div>
    </div>
  );
};

export default ItemList;
