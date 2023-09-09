import { Spinner } from "@material-tailwind/react";
import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./itemList";

const ItemListContainer = ({business}) => {
  console.log(business)
  return (
    <div>
      <ItemList business={business} />
    </div>
  );
};

export default ItemListContainer;
