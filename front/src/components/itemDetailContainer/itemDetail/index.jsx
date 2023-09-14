import React, { useState } from 'react'
import Cards from './cards'
import InfoDetail from './infoDetail'
import { BiArrowBack } from "react-icons/bi";
import { Button } from '@material-tailwind/react';


const ItemDetail = ({ item, handleOpen }) => {

  const handleBack = () => {
    history.back();
  };

  return (
    <div>
      <div className="flex  items-center text-left text-[24px] font-bold text-colorNeutral1 p-[2rem]">
        <Button
          onClick={handleBack}
          className="rounded-full p-1 border-2 border-colorNeutral1 bg-colorNeutral3 mr-3"
        >
          <BiArrowBack size={16} color="black" />
        </Button>
        <h3 className='text-sizeSubtitle'>Detalle del pack</h3>
      </div>
      <div className='flex flex-col justify-center items-center w-[22rem] rounded-xl m-auto border-2 border-colorNeutral2 mb-10'>
        <Cards item={item} handleOpen={handleOpen} />
        <InfoDetail item={item} />
      </div>
    </div>
  )
}

export default ItemDetail
