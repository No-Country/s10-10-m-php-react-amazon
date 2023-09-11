import React from 'react'
import CardActivePack from '../CardActivePack'

const ActivePacksList = ({items}) => {
  return (
    <div className='h-screen'>
      {items && items.length !== 0 && (
          items.map((item) =>
           <CardActivePack item={item}  key={item.id} /> )
          )
      } 
    </div>
  )
}

export default ActivePacksList
