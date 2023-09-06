import React from "react";
import Item from "./item";

const ItemList = ({ items }) => {
  

  return (
    <div className="w-screen flex items-center justify-center ">
        <div className="h-full overflow-x-auto  flex items-center" >
          {items.length !== 0 ? (
            items.map((item, index) => <Item item={item} key={index} />)
          ) : (
            <div>
              <h3>No hay coincidencias con su búsqueda</h3>
            </div>
          )}
        </div>
    </div>
  );
};

export default ItemList;
