import React from 'react'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { orderByDate, orderByPrice } from '../../utils/products/functions';
   
  export function OrderMenu({setItems, items, setTitle}) {

    const handleOrderByPrice = () => {
        const itemsOrdered = orderByPrice([...items])
        setTitle("Ordenado por precio")
        setItems(itemsOrdered)
    }

    const handleOrderByDate = () => {
        const itemsOrdered = orderByDate([...items])
        setTitle("Los más recientes")
        setItems(itemsOrdered)
    }
    return (
      <Menu className="rotate-90 text-2xl m-2">
        <MenuHandler>
          <FontAwesomeIcon icon={faSliders} className="rotate-90 text-2xl m-2"/>
        </MenuHandler>
        <MenuList>
          <MenuItem onClick={handleOrderByPrice}>Ordenar por precio (menor a mayor)</MenuItem>
          <MenuItem onClick={handleOrderByDate}>Mas recientes</MenuItem>
          <MenuItem>Más cercanos</MenuItem>
        </MenuList>
      </Menu>
    );
  }

