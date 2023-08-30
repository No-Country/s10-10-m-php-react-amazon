import React from "react";
import ItemDetail from "./itemDetail";
// import { params } from 'wouter';

const ItemDetailContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});
  const [match, params] = props;

  const id = params.id;

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
