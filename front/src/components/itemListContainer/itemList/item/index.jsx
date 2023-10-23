import React from 'react'
import CardPack from '../../../CardPack'

const Item = ({ pack }) => {
  return (
      <CardPack item={pack.item} shop={pack.shop} />
  )
}

export default Item
