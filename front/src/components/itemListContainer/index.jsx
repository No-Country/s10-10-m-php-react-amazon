import React from "react";
import ItemList from "./itemList";

const ItemListContainer = ({business, filters}) => {
  return (
    <div>
      <ItemList business={business} filters={filters} />
    </div>
  );
};

export default ItemListContainer;
