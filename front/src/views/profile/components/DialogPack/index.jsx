import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import SuppliesIcon from "../../../../assets/icons/Supplies.png";
import DeliveryBoxIcon from "../../../../assets/icons/Delivery box.png";
import FeedbackIcon from "../../../../assets/icons/Feedback.png";
import { Link } from "wouter";

const DialogPack = ({ setOpen, open }) => {
  const handleOpen = () => setOpen(!open);

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className=" w-max-[343px] h-min-[435px]"
    >
      <div className=" w-max-[343px] h-[435px] h-[max-435px] flex flex-col justify-evenly items-center overflow-y-auto">
        <div>
          <Link
            to="/user/profile/activepacks"
            className="flex flex-col items-center"
          >
            <div className="w-[56px] h-[56px] rounded-full  flex justify-center items-center border-2 cursor-pointer">
              <img src={SuppliesIcon} alt="supplies" />
            </div>
            <p>packs activos</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <Link to="/user/profile/selledpacks"  className="flex flex-col items-center">
              <div className="w-[56px] h-[56px] rounded-full  flex justify-center items-center border-2">
                <img src={DeliveryBoxIcon} alt="delivery box icon" />
              </div>
              <p>packs vendidos</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[56px] h-[56px] rounded-full  flex justify-center items-center border-2">
            <img src={FeedbackIcon} alt="Feedback" />
          </div>
          <p>4,9</p>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogPack;
