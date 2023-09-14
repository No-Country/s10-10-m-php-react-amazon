import React, { useEffect, useState } from "react";
import bagPurchases from "../assets/BagCardPurchases.png";
import { Button } from "@material-tailwind/react";
import { RiDeleteBinLine } from "react-icons/ri";
import ModalDeletePurchases from "./modalDeletePurchases";
import { useSelector } from "react-redux";
import { getPurchases } from "../../../../../../api/authApi";

const CardPurchases = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const timeStartParts = item.pack.time_start.split(" ")[1].split(":");
  const timeStart = `${timeStartParts[0]}:${timeStartParts[1]}`;

  const timeEndParts = item.pack.time_end.split(" ")[1].split(":");
  const timeEnd = `${timeEndParts[0]}:${timeEndParts[1]}`;

  return (
    <div className="border-2 border-colorNeutral2 h-[192px] lg:w-[950px]  w-full rounded-xl flex m-0 lg:m-auto">
      <section className="h-full">
        <div className="h-full flex justify-center w-[90px] items-center relative">
          <img src={bagPurchases} alt="bagPurchases" />
          <span className="absolute bottom-14" id="purchaseX">
            x{item.amount/item.pack.price}
          </span>
          <span className="absolute bottom-14 z-10" id="purchaseX2">
            x{item.amount/item.pack.price}
          </span>
        </div>
      </section>

      <section className="w-full h-[192px] flex items-center">
        <div className="h-[168px] border-r-2 border-colorNeutral2  "></div>

        <div className="h-full p-[1rem] pr-[2rem] w-full flex flex-col justify-between">
          <div className="w-full flex justify-between">
            <span>10/09/23</span>
            <button className="mr-2 text-sizeTitle" onClick={handleOpen}>
              <RiDeleteBinLine />
            </button>
          </div>
          <span className="font-bold text-sizeText text-colorNeutral1">
            {item.pack.name}
          </span>

          <div className="flex justify-between items-center">
            <span>Recogida</span>
            <div className="border-[2px] border-colorNeutral2 px-2 py-[2px] w-32 rounded-md ml-8 text-sizeNote">
              <span> {timeStart} - {timeEnd}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-bold text-colorPrimary text-sizeSubtitle">
              $ {item.amount}
            </span>
            <Button className=" h-[44px] normal-case border-2 font-bold border-colorPrimary bg-colorNeutral3 text-colorPrimary rounded-full">
              Ver Detalle
            </Button>
          </div>

          <ModalDeletePurchases handleOpen={handleOpen} open={open} />
        </div>
      </section>
    </div>
  );
};

export default CardPurchases;
