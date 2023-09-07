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

const DialogPack = ({ setOpen, open }) => {
  const handleOpen = () => setOpen(!open);

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className=" w-max-[343px] h-min-[435px]"
    >
      <div className=" w-max-[343px] h-[435px] flex flex-col justify-evenly items-center">
        <div className="flex flex-col items-center">
          <div className="w-[56px] h-[56px] rounded-full  flex justify-center items-center border-2">
            <img src={SuppliesIcon} alt="supplies" />
          </div>
          <p>4 packs activos</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[56px] h-[56px] rounded-full  flex justify-center items-center border-2">
            <img src={DeliveryBoxIcon} alt="delivery box icon" />
          </div>
          <p>124 packs vendidos este mes</p>
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
