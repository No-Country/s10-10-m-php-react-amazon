import React from "react";
import SwipeableViews from "react-swipeable-views";
import Item from "./item";

const ItemList = ({ items }) => {
  const handleSwipe = (index) => {};

  return (
    <div className="w-full   flex items-center justify-center ">
      <SwipeableViews enableMouseEvents onChangeIndex={handleSwipe} resistance>
        <div className="h-full overflow-x-auto flex items-center" >
          {items.length !== 0 ? (
            items.map((item) => <Item item={item} key={item.id} />)
          ) : (
            <div>
              <h3>No hay coincidencias con su búsqueda</h3>
            </div>
          )}
        </div>
      </SwipeableViews>
    </div>
  );
};

export default ItemList;
