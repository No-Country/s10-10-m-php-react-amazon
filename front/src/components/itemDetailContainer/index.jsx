import React, { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import { Spinner } from "@material-tailwind/react";
import { useRoute } from 'wouter'
import { productFindShop } from "../../utils/products/functions";
import { ItemModal } from "./itemModal";
import { getPackById } from "../../api/itemApi";
import { useSelector } from "react-redux";
const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [match, params] = useRoute("/detail/:id");
  const id = params.id
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const user = useSelector(state => state.user)
  const [item, setItem] = useState({})

  useEffect(() => {
    setIsLoading(true);
    getPackById(id, user.token)
      .then((response) => {
        setItem(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setItem]);

  return (
    <div>
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div>
          <ItemDetail item={item} handleOpen={handleOpen} />
        </div>
      )}
      <ItemModal open={open} handleOpen={handleOpen} item={item} />
    </div>
  );
};

export default ItemDetailContainer;
