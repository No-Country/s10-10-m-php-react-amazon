import React, { useState } from "react";
import ItemDetail from "./itemDetail";
import { Spinner } from "@material-tailwind/react";

const ItemDetailContainer = (props) => {
  const [isLoading, setIsLoading] = useState(false);



  /** TO DO consultar al back */
  return (
    <div>
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          <ItemDetail />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
