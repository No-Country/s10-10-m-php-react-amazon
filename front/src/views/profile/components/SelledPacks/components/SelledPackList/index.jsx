import React from 'react'
import CardSelledPack from '../CardSelledPack'

const SelledPackList = ({items}) => {
  return (
    <div className='h-screen'>
      {items && items.length !== 0 ? (
          items.map((item) =>
           <CardSelledPack item={item}  key={item.id} /> )
          ) : (
            <h1 className='mt-5'>No hay productos vendidos</h1>
          )
      } 
    </div>
  )
}

export default SelledPackList
