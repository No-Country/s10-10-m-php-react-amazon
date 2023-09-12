import React from 'react'
import CardSelledPack from '../CardSelledPack'

const SelledPackList = ({items}) => {
  return (
    <div className='h-screen'>
      {items && items.length !== 0 && (
          items.map((item) =>
           <CardSelledPack item={item}  key={item.id} /> )
          )
      } 
    </div>
  )
}

export default SelledPackList
