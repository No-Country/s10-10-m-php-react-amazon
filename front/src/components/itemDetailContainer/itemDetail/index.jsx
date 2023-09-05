import React, { useState } from 'react'
import Cards from './cards'
import InfoDetail from './infoDetail'
import SimilarPacks from './similarPacks'
const ItemDetail = ({item, handleOpen}) => {
  
  return (
    <div className='flex flex-col justify-center items-center'>
      <Cards item={item} handleOpen={handleOpen}/>
      <InfoDetail item={item} />
      <SimilarPacks />
    </div>
  )
}

export default ItemDetail
