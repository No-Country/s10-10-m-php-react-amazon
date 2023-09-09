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
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center">
              <img src={image2} alt="" className="w-1/2 sm:w-full" />
              <Button
                onClick={handleCloseModal}
                className="bg-colorPrimary normal-case text-white font-bold rounded-full w-full"
              >
                <Link to="/auth/user/signup">Quiero salvar comida </Link>
              </Button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={image1} alt="" className="w-1/2 sm:w-full" />
              <Button
                onClick={handleCloseModal}
                className="bg-colorPrimary normal-case text-white font-bold rounded-full w-full"
              >
                <Link to="/auth/shop/signup">Quiero vender comida </Link>
              </Button>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
