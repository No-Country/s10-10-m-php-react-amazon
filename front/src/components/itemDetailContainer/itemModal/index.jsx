import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

export function ItemModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="text-sizeSubtitle font-weightSubtitle text-colorNeutral1 flex justify-center">
          Selecciona la cantidad
        </DialogHeader>
        <DialogBody
          className="flex flex-col items-center text-colorNeutral1 p-12"
          divider
        >
          <div className="w-60 h-24 bg-colorNeutral2 bg-opacity-20 rounded-2xl flex items-center justify-center"></div>
          <div className="flex flex-col m-2">
            <span className="text-sizeText font-weightTitle">
              Resumen de la compra
            </span>
            <span className="text-sizeNote">Subtotal</span>
            <span className="text-sizeNote">Coste del servicio</span>
            <span className="text-sizeNote font-weightSubtitle">Total</span>
          </div>
        </DialogBody>
        <DialogFooter className="flex flex-col justify-center">
          <div className="text-black text-xs font-medium leading-tight">
            Consulta la política de cancelación aquí
          </div>
          <Button
            style={{ textTransform: "none" }}
            className="bg-colorPrimary rounded-full m-5 h-12"
            onClick={handleOpen}
          >
            <span>Comprar con **** </span>
          </Button>
          <div className="text-neutral-800 text-sm font-semibold leading-tight">
            Selecciona otro método de pago
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
