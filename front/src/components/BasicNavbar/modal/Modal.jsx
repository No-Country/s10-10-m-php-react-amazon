import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import { Link } from "wouter";
import { IoCloseCircleOutline } from "react-icons/io5";
import image1 from "../assets/businessPerson.png";
import image2 from "../assets/footLoverPerson.png";

//TODO - AGREGAR LAS IMAGENES SOBRE LOS BOTONES

export function Modal({ open, setOpen }) {
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} handler={() => setOpen(!open)}>
        <div className="flex justify-end">
          <DialogHeader>
            <button
              onClick={handleCloseModal}
              className="text-black focus:outline-none"
            >
              <IoCloseCircleOutline />
            </button>
          </DialogHeader>
        </div>
        <DialogBody>
          <div className="flex flex-col lg:flex-row lg:gap-10 justify-center items-center gap-3 my-8">
            <Button
              onClick={handleCloseModal}
              className="rounded-full bg-colorPrimary normal-case font-weightTextButton text-sizeButtonCTAs p-0 text-white h-[44px] w-1/2"
            >
              <Link to="/auth/user/signup"> Quiero salvar comida </Link>
            </Button>
            <Button
              onClick={handleCloseModal}
              className="rounded-full bg-colorPrimary normal-case font-weightTextButton text-sizeButtonCTAs p-0 text-white h-[44px] w-1/2"
            >
              <Link to="/auth/shop/login">Quiero vender comida </Link>
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
