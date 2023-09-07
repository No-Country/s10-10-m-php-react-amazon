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
            variant={today ? "gradient" : "outlined"}
            className="rounded-full w-min-2/5 w-2/5"
            onClick={() => setToday(true)}
          >
            Hoy
          </Button>
          <Button
            variant={!today ? "gradient" : "outlined"}
            className="rounded-full w-min-2/5 w-2/5"
            onClick={() => setToday(false)}
          >
            Mañana
          </Button>
        </div>
        <h1>Rubro</h1>
        <div className="flex justify-evenly">
          <Button
            variant={rubro == "panaderia" ? "gradient" : "outlined"}
            className="rounded-full w-min-1/4 w-1/4"
            onClick={() => setRubro("panaderia")}
          >
            Panaderia
          </Button>
          <Button
            variant={rubro == "verduleria" ? "gradient" : "outlined"}
            className="rounded-full w-min-1/4 w-1/4"
            onClick={() => setRubro("verduleria")}
          >
            Verduleria
          </Button>
          <Button
            variant={rubro == "supermercado" ? "gradient" : "outlined"}
            className="rounded-full w-min-1/4 w-1/4"
            onClick={() => setRubro("supermercado")}
          >
            Supermercado
          </Button>
        </div>
        <h1>Ordenado por: </h1>
        <div className="flex justify-evenly">
          <Button
            variant={order == "price" ? "gradient" : "outlined"}
            className="rounded-full w-min-1/4 w-1/4"
            onClick={() => setOrder("price")}
          >
            Precio
          </Button>
          <Button
            variant={order == "distance" ? "gradient" : "outlined"}
            className="rounded-full w-min-1/4 w-1/4"
            onClick={() => setOrder("distance")}
          >
            Distancia
          </Button>
          <Button
            variant={order == "date" ? "gradient" : "outlined"}
            className="rounded-full w-min-1/4 w-1/4"
            onClick={() => setOrder("date")}
          >
            Más recientes
          </Button>
        </div>
        <h1>Vista: </h1>
        <div className="flex justify-evenly">
          <Button
            variant={view == "map" ? "gradient" : "outlined"}
            className="rounded-full w-min-2/5 w-25"
            onClick={() => setView("map")}
          >
            Mapa
          </Button>
          <Button
            variant={view == "list" ? "gradient" : "outlined"}
            className="rounded-full w-min-2/5 w-2/5"
            onClick={() => setView("list")}
          >
            Lista
          </Button>
        </div>
      </DialogBody>
      <DialogFooter className="flex flex-col justify-between items-center h-1/6">
        <Button
          variant="gradient"
          color="green"
          onClick={submit}
          className="rounded-full"
        >
          <span>Aplicar filtros</span>
        </Button>
        <Button
          variant="outlined"
          onClick={handleOpen}
          className="rounded-full"
        >
          <span>Limpiar</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default DialogFilter;
