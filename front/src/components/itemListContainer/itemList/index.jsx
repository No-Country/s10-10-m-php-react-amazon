import React from 'react'
import Item from './item'


const ItemList = ({items}) => {
  return (
    <div>
        {items.length !== 0 ? items.map((item) => <Item item={item} key={item.id} />) : <div><h3>No hay coincidencias con su búsqueda</h3></div>}
    </div>
  )
}

export default ItemList
