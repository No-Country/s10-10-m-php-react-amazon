import React from 'react'
import CardPack from '../../../CardPack'

const Item = ({ item, shop }) => {
  return (
    <div>
      <CardPack item={item} shop={shop} />
    </div>
  )
}

export default Item
