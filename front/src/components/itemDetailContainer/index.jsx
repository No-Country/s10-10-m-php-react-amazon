import React, { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import { Spinner } from "@material-tailwind/react";
import { useRoute } from 'wouter'
import { productFindShop } from "../../utils/products/functions";
import { ItemModal } from "./itemModal";
import { getPackById } from "../../api/itemApi";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../../features/itemSlice";


const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [match, params] = useRoute("/detail/:id");
  const id = params.id
  const [open, setOpen] = useState(false);

 
  const user = useSelector(state => state.user)
  const [item1, setItem1] = useState({})

  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setItem(item1))
    setOpen(!open);
  }

  useEffect(() => {
    setIsLoading(true);
    getPackById(id, user.token)
      .then((response) => {
        setItem1(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setItem1]);


  return (
    <div>
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div>
          <ItemDetail item={item1} handleOpen={handleOpen} />
        </div>
      )}
      <ItemModal open={open} handleOpen={handleOpen} item={item1} />
    </div>
  );
};

export default ItemDetailContainer;
