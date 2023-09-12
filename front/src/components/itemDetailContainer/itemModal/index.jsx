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
import { Link } from "wouter";

export function ItemModal({ open, handleOpen, item }) {

  const [quantity, setQuantity] = useState(0)

  const handlePlus = () => {
    if (item.stock > quantity) {
      setQuantity(quantity + 1)
    }
  }

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <>
      <Dialog
        className="max-w-full h-[537px] w-[375px] absolute top-32  bottom-0  m-0 rounded-t-2xl rounded-b-none "
        open={open}
        handler={handleOpen}
        animate={{
          mount: { translateY: 0, originY: 'bottom' },
          unmount: { translateY: '100%', originY: 'bottom' },
        }}
      >
        <DialogHeader className="text-sizeSubtitle font-bold my-3 text-colorNeutral1 flex justify-center">
          Selecciona la cantidad
        </DialogHeader>
        <DialogBody
          className="flex flex-col items-center border-0 text-colorNeutral1 w-[300px] m-auto"
          divider
        >
          <div className="w-full h-[129px] border-t-0 rounded-2xl flex items-center justify-evenly bg-colorPrimary p-5">
            <IconButton className="rounded-full border-2 border-colorNeutral3  bg-colorPrimary w-[32px] h-[32px]" onClick={handleMinus}>
              <FontAwesomeIcon icon={faMinus} className="text-sizeTitle" color="white" />
            </IconButton>
            <div className="w-24 flex justify-center items-center">
              <span className="text-[70px] text-colorNeutral3 font-extrabold">{quantity}</span>
            </div>
            <IconButton className="rounded-full border-2 border-colorNeutral3  bg-colorPrimary  w-[32px] h-[32px]" onClick={handlePlus}>
              <FontAwesomeIcon icon={faPlus} color="white" className="text-sizeTitle" />
            </IconButton>
          </div>
          <div className="h-[1px] w-full border border-colorNeutral2 my-6"></div>
          <div className="flex flex-col gap-4 w-full">
            <span className="text-sizeText font-weightTitle">
              Resumen de la compra
            </span>
            <div className="text-sizeNote flex justify-between items-center">
              <span>Subtotal:</span> <span> ${item.price * quantity}</span>
            </div>
            <div className="text-sizeNote flex justify-between items-center">
              <span> Coste del servicio:</span> <span> $0</span>
            </div>
            <div className="text-sizeNote flex justify-between items-center">
              <span > Total: </span> <span>${item.price * quantity}</span>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="flex flex-col justify-center pb-10">
          <Link to={"/payment"}>
            <Button
              style={{ textTransform: "none" }}
              className="bg-colorPrimary rounded-full h-12 w-[300px] text-buttonFilledColor font-bold"
              onClick={handleOpen}
            >
              <span>Ir a Pagar </span>
            </Button>
          </Link>
        </DialogFooter>
      </Dialog >
    </>
  );
}
