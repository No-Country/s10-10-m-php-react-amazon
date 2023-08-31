import React from "react";
import ItemDetail from "./itemDetail";


const ItemDetailContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});


  /** TO DO consultar al back */
  return (
    <div>
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          <ItemDetail item={item} key={item.id} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
