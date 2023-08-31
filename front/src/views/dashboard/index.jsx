import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { InputSearch } from '../../components/InputSearch'
import ItemListContainer from '../../components/itemListContainer'
import { products } from '../../utils/products'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {

    const [items, setItems] = useState([])
    
    useEffect(() => {
      setItems(products);
    }, []);

  return (
    <div className='p-3'>
      <div className='p-5 flex items-center justify-center'>
      <InputSearch/>
      <FontAwesomeIcon icon={faSliders} className="rotate-90 text-2xl m-2"/>
      </div>
      <div className='flex items-center justify-center'>
      <FontAwesomeIcon icon={faMap} className="text-2xl m-2"/>
      <span className='underline decoration-1'>CABA, Caballito</span>
      </div> 
      <h1 className='text-sizeTitle font-weightTitle'>Los más deseados</h1>
      <ItemListContainer products={items}/>
      <h1 className='text-sizeTitle font-weightTitle'>Los más deseados</h1>
      <ItemListContainer products={items}/>
    </div>
  )
}

export default Dashboard
