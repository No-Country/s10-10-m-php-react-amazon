import React, { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import { Spinner } from "@material-tailwind/react";
import { useRoute } from 'wouter'
import { productFindShop } from "../../utils/products/functions";
import { ItemModal } from "./itemModal";
const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [match, params] = useRoute("/detail/:id");
  const id = params.id
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [item, setItem] = useState(productFindShop(id))
  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  
  /** TO DO consultar al back */
  return (
    <div>
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          <ItemDetail item={item} handleOpen={handleOpen}/>
        </div>
      )}
      <ItemModal open={open} handleOpen={handleOpen} item={item} />
    </div>
  );
};

export default ItemDetailContainer;
