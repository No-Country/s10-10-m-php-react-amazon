import { Spinner } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getPurchasesByShopId } from '../../../../../../api/purchaseApi';
import SelledPackList from '../SelledPackList';

const SelledPacksListContainer = () => {
    const user = useSelector(state => state.user)
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        getPurchasesByShopId(user.id, user.token)
          .then((response) => {
            setItems(response)
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
            <SelledPackList items={items} />
          )}
    </div>
  )
}

export default SelledPacksListContainer
