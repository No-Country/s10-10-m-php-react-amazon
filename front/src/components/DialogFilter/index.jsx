import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { orderByDate, orderByPrice } from "../../utils/products/functions";

const DialogFilter = ({ open, handleOpen, setItems, items, showMap, setShowMap }) => {
  const [today, setToday] = useState(true);
  const [rubro, setRubro] = useState("panaderia");
  const [order, setOrder] = useState("price");
  const [view, setView] = useState("list");

  const buttonActive = "rounded-full border-teal-900 rounded-full sm:w-[200px] w-1/4 my-2 text-colorPrimary "
  const buttonInactive = "rounded-full border-white-50 rounded-full sm:w-[200px] w-1/4 my-2"
  const submit = () => {
    let itemsOrdered;
    if (order == "price") {
      itemsOrdered = orderByPrice([...items]);
    } else if (order == "date") {
      itemsOrdered = orderByDate([...items]);
    }
    setItems(itemsOrdered);
    if (view == "map") {
      setShowMap(true)
    } else {
      setShowMap(false)
    }
    handleOpen();
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
      <DialogBody divider className="flex flex-col justify-between  h-2/3">
        <h1>Recogida</h1>
        <div className="flex justify-evenly">
          <Button
            variant="outlined"
            className={today ? buttonActive : buttonInactive} 
            onClick={() => setToday(true)}
          >
            Hoy
          </Button>
          <Button
            variant="outlined"
            className={!today ? buttonActive : buttonInactive}
            onClick={() => setToday(false)}
          >
            Mañana
          </Button>
        </div>
        <h1>Rubro</h1>
        <div className="flex justify-evenly flex-wrap">
          <Button
            variant="outlined"
            className={rubro=="panaderia" ? buttonActive : buttonInactive}
            onClick={() => setRubro("panaderia")}
          >
            Panaderia
          </Button>
          <Button
            variant="outlined"
            className={rubro=="verduleria"? buttonActive : buttonInactive}
            onClick={() => setRubro("verduleria")}
          >
            Verduleria
          </Button>
          <Button
            variant="outlined"
            className={rubro=="supermercado" ? buttonActive : buttonInactive}
            onClick={() => setRubro("supermercado")}
          >
            Supermercado
          </Button>
        </div>
        <h1>Ordenado por: </h1>
        <div className="flex justify-evenly">
          <Button
            variant="outlined"
            className={order == "price" ? buttonActive : buttonInactive}
            onClick={() => setOrder("price")}
          >
            Precio
          </Button>
          <Button
            variant= "outlined"
            className={order == "distance" ? buttonActive : buttonInactive}
            onClick={() => setOrder("distance")}
          >
            Distancia
          </Button>
          <Button
            variant= "outlined"
            className={order == "date" ? buttonActive : buttonInactive}
            onClick={() => setOrder("date")}
          >
            Más recientes
          </Button>
        </div>
        <h1>Vista: </h1>
        <div className="flex justify-evenly">
          <Button
            variant="outlined"
            className={view == "map" ? buttonActive : buttonInactive}
            onClick={() => setView("map")}
          >
            Mapa
          </Button>
          <Button
            variant="outlined"
            className={view == "list" ? buttonActive : buttonInactive}
            onClick={() => setView("list")}
          >
            Lista
          </Button>
        </div>
      </DialogBody>
      <DialogFooter className="flex flex-col justify-between items-center ">
        <Button
          variant="gradient"
          color="teal"
          onClick={submit}
          className="rounded-full border-teal-900 rounded-full sm:w-[200px] w-1/4 my-2"
        >
          Aplicar filtros
        </Button>
        <Button
          variant="outlined"
          onClick={handleOpen}
          className="rounded-full border-teal-900 rounded-full sm:w-[200px] w-1/4 my-2"
        >
          Limpiar
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default DialogFilter;
