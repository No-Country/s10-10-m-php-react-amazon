import React, { useState } from 'react'
import ItemListContainer from '../../components/itemListContainer'

const Dashboard = () => {
    const [products, setProducts] = useState([])
    /** TO DO consulta al back */

  return (
    <div>
      <ItemListContainer products={products}/>
    </div>
  )
}

export default Dashboard
