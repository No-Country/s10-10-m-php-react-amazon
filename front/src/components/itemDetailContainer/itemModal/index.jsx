import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton
} from "@material-tailwind/react";
import { useState } from "react";

export function ItemModal({ open, handleOpen, item }) {

  const [quantity, setQuantity] = useState(0)

  const handlePlus = () => {
    if (item.stock > quantity) {
      setQuantity(quantity+1)
    }
  }

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity-1)
    }
  }
  return (
    <>
      <Dialog
      className="max-w-full w-full absolute top-1/4  bottom-0  m-0 rounded-t-2xl rounded-b-none "
        open={open}
        handler={handleOpen}
        animate={{
          mount: { translateY: 0, originY: 'bottom' },
          unmount: { translateY: '100%', originY: 'bottom' },
        }}
      >
        <DialogHeader className="text-sizeSubtitle font-weightSubtitle text-colorNeutral1 flex justify-center">
          Selecciona la cantidad
        </DialogHeader>
        <DialogBody
          className="flex flex-col items-center text-colorNeutral1 p-12"
          divider
        >
          <div className="w-60 h-24 bg-colorNeutral2 bg-opacity-20 rounded-2xl flex items-center justify-evenly p-5">
          <IconButton variant="outlined" className="rounded-full" color="teal" size="sm" onClick={handleMinus}>
            <FontAwesomeIcon icon={faMinus} className="text-sizeTitle"/>
            </IconButton>
            <span className="text-5xl font-extrabold">{quantity}</span>
            <IconButton variant="gradient" className="rounded-full" color="teal" size="sm" onClick={handlePlus}>
            <FontAwesomeIcon icon={faPlus} className="text-sizeTitle"/>
            </IconButton>
          </div>
          <div className="flex flex-col m-2">
            <span className="text-sizeText font-weightTitle">
              Resumen de la compra
            </span>
            <span className="text-sizeNote">Subtotal: ${item.price * quantity}</span>
            <span className="text-sizeNote">Coste del servicio: $0</span>
            <span className="text-sizeNote font-weightSubtitle">
              Total: ${item.price * quantity}
            </span>
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
