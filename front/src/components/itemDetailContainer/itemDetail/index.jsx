import React from 'react'
import Cards from './cards'
import InfoDetail from './infoDetail'
import SimilarPacks from './similarPacks'

const ItemDetail = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Cards />
      <InfoDetail />
      <SimilarPacks />
    </div>
  )
}

export default ItemDetail
