import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { orderByDate, orderByPrice } from "../../utils/products/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

const DialogFilter = ({ open, handleOpen, setFilters, filters }) => {
  const buttonActive = "rounded-full border-teal-900 rounded-full sm:w-[200px] w-1/4 min-w-fit my-2 text-colorPrimary "
  const buttonInactive = "rounded-full border-white-50 rounded-full sm:w-[200px] w-1/4 min-w-fit my-2"
  

  let updatedFilters = {...filters}

  const handleFilter = (filter) => {
  const updatedFilters = { ...filters };

  if (filter === "today") {
    updatedFilters.today = true;
  } else if (filter === "tomorrow") {
    updatedFilters.today = false;
  } else if (filter === "panaderia") {
    if (!updatedFilters.category.includes("panaderia")) {
      updatedFilters.category.push("panaderia");
    } else {
      updatedFilters.category = updatedFilters.category.filter(
        (item) => item !== "panaderia"
      );
    }
  } else if (filter === "verduleria") {
    if (!updatedFilters.category.includes("verduleria")) {
      updatedFilters.category.push("verduleria");
    } else {
      updatedFilters.category = updatedFilters.category.filter(
        (item) => item !== "verduleria"
      );
    }
  } else if (filter === "supermercado") {
    if (!updatedFilters.category.includes("supermercado")) {
      updatedFilters.category.push("supermercado");
    } else {
      updatedFilters.category = updatedFilters.category.filter(
        (item) => item !== "supermercado"
      );
    }
  } else if (filter === "distance") {
    updatedFilters.order = "distance";
  } else if (filter === "price") {
    updatedFilters.order = "price";
  } else if (filter === "date") {
    updatedFilters.order = "date";
  } else if (filter === "map") {
    updatedFilters.view = "map";
  } else if (filter === "list") {
    updatedFilters.view = "list";
  } else if (filter == "all") {
    updatedFilters.all = true
  } else if (filter == "available") {
    updatedFilters.all = false
  }

  setFilters(updatedFilters);
};

  return (
    <Dialog
      className="max-w-full w-full h-5/6 absolute top-1/6 bottom-0  m-0 rounded-t-2xl rounded-b-none z-10 p-5"
      open={open}
      handler={handleOpen}
      animate={{
        mount: { translateY: 0, originY: "bottom" },
        unmount: { translateY: "100%", originY: "bottom" },
      }}
    >
      <DialogHeader className="flex justify-center">
        <h1>Filtros</h1>
      </DialogHeader>
      <DialogBody divider className="flex flex-col justify-between  h-4/5">
        <h1>Mostrar</h1>
        <div className="flex justify-evenly">
          <Button
            variant="outlined"
            className={filters.all ? buttonActive : buttonInactive} 
            onClick={() => handleFilter("all")}
          >
            Todos
          </Button>
          <Button
            variant="outlined"
            className={!filters.all ? buttonActive : buttonInactive}
            onClick={() => handleFilter("available")}
          >
            Disponibles
          </Button>
        </div>
        <h1>Rubro</h1>
        <div className="flex justify-evenly flex-wrap">
          <Button
            variant="outlined"
            className={updatedFilters.category.find(item => item == "panaderia") ? buttonActive : buttonInactive}
            onClick={() => handleFilter("panaderia")}
          >
            Panaderia
          </Button>
          <Button
            variant="outlined"
            className={updatedFilters.category.find(item => item == "verduleria")? buttonActive : buttonInactive}
            onClick={() => handleFilter("verduleria")}
          >
            Verduleria
          </Button>
          <Button
            variant="outlined"
            className={updatedFilters.category.find(item => item == "supermercado") ? buttonActive : buttonInactive}
            onClick={() => handleFilter("supermercado")}
          >
            Supermercado
          </Button>
        </div>
        <h1>Ordenado por: </h1>
        <div className="flex justify-evenly">
          <Button
            variant="outlined"
            className={filters.order == "price" ? buttonActive : buttonInactive}
            onClick={() => handleFilter("price")}
          >
            Precio
          </Button>
          <Button
            variant= "outlined"
            className={filters.order == "distance" ? buttonActive : buttonInactive}
            onClick={() => handleFilter("distance")}
          >
            Distancia
          </Button>
          <Button
            variant= "outlined"
            className={filters.order == "date" ? buttonActive : buttonInactive}
            onClick={() => handleFilter("date")}
          >
            Más recientes
          </Button>
        </div>
        <h1>Vista: </h1>
        <div className="flex justify-evenly">
          <Button
            variant="outlined"
            className={filters.view == "map" ? buttonActive : buttonInactive}
            onClick={() => handleFilter("map")}
          >
            <FontAwesomeIcon icon={faMap}/>
            <span className="ml-3">Mapa</span>
          </Button>
          <Button
            variant="outlined"
            className={filters.view == "list" ? buttonActive : buttonInactive}
            onClick={() => handleFilter("list")}
          >
            <FontAwesomeIcon icon={faList}/>
            <span className="ml-3">Lista</span>
          </Button>
        </div>
      </DialogBody>
      <DialogFooter className="flex flex-col justify-between items-center ">
        <Button
          variant="outlined"
          onClick={handleOpen}
          className="rounded-full border-teal-900 rounded-full sm:w-[200px] w-1/4 my-2"
        >
          Cerrar
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default DialogFilter;
