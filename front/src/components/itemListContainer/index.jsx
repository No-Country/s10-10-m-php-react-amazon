import { Spinner } from "@material-tailwind/react";
import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./itemList";

const ItemListContainer = ({ products }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setItems([...products]);
      setIsLoading(false);
    }, 2000);
  }, [products]);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        
          <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
