import { Spinner } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getShopPacks } from '../../../../../../api/itemApi';
import ActivePacksList from '../ActivePacksList';

const ActivePacksListContainer = () => {
    const user = useSelector(state => state.user)
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        getShopPacks()
          .then((response) => {
            const allPacks = response.data['Packs available']
            const packs = allPacks.filter(item => item.user_id == user.id)
            setItems(packs)
            })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setIsLoading(false)
          })
      }, []);
  return (
    <div>
      {isLoading ? (
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <ActivePacksList items={items} />
          )}
    </div>
  )
}

export default ActivePacksListContainer