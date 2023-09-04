import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { InputSearch } from '../../components/InputSearch'
import ItemListContainer from '../../components/itemListContainer'
import { products } from '../../utils/products'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { OrderMenu } from '../../components/OrderMenu'
import DashboardMap from './map'

const Dashboard = () => {
    const [items, setItems] = useState(products)
    const [title, setTitle] = useState("Los más deseados")

   
  return (
    <div className='p-3'>
      <div className='p-5 flex items-center justify-center'>
      <InputSearch/>
      <OrderMenu setItems={setItems} items={items} setTitle={setTitle} />
      </div>
      <DashboardMap userLatitude={-31.444961} userLongitude={-64.1850551} setItems={setItems} items={items}/>
      <div className='flex items-center justify-center'>
      <FontAwesomeIcon icon={faMap} className="text-2xl m-2"/>
      <span className='underline decoration-1'>CABA, Caballito</span>
      </div> 
      <h1 className='text-sizeTitle font-weightTitle'>{title}</h1>
      <ItemListContainer products={items}/>

    </div>
  )
}

export default Dashboard
