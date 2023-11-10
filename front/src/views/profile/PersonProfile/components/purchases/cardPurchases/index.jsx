import React, { useEffect, useState } from "react";
import bagPurchases from "../assets/BagCardPurchases.png";
import { Button } from "@material-tailwind/react";
import { RiDeleteBinLine } from "react-icons/ri";
import ModalDeletePurchases from "./modalDeletePurchases";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "wouter";
import { setPurchaseId } from "../../../../../../features/purchaseidSlice";

const CardPurchases = ({ item, setPurchase, response1 }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);





  const timeStartParts = item.pack.time_start.split(" ")[1].split(":");
  const timeStart = `${timeStartParts[0]}:${timeStartParts[1]}`;

  const timeEndParts = item.pack.time_end.split(" ")[1].split(":");
  const timeEnd = `${timeEndParts[0]}:${timeEndParts[1]}`;

  const purchaseId = useSelector((state) => state.purchaseId.purchaseId);
  const dispatch = useDispatch()

  return (
    <div className="border-2 border-colorNeutral2 h-[192px]  lg:w-[950px] rounded-xl flex m-0 lg:m-auto">
      <section className="h-full">
        <div className="h-full flex justify-center w-[90px] items-center relative">
          <img src={bagPurchases} alt="bagPurchases" />
          <span className="absolute bottom-14" id="purchaseX">
            x{item.amount / item.pack.price}
          </span>
          <span className="absolute bottom-14 z-10" id="purchaseX2">
            x{item.amount / item.pack.price}
          </span>
        </div>
      </section>

      <section className="w-full h-[192px] flex items-center">
        <div className="h-[168px] border-r-2 border-colorNeutral2  "></div>

        <div className="h-full p-[1rem] pr-[2rem] w-full flex flex-col justify-between">
          <div className="w-full flex justify-between">
            <span className="text-[16px]">10/09/23</span>
            {item.status !== "reserved" && (
              <button className="mr-2 text-sizeTitle" onClick={handleOpen}>
                <RiDeleteBinLine className="text-colorDenotativo1" />
              </button>
            )}
          </div>
          <span className="font-bold text-[14px] lg:text-sizeText text-colorNeutral1">
            {item.pack.name}
          </span>

          <div className="flex justify-between items-center w-[250px]">
            <span className="text-[20px]">{item.status === "reserved" ? <span className="text-[#ed922af5]">Reservado</span> : <span className="text-[#6ee909f5]">Recogido</span>}</span>
            <div className="border-[2px] border-colorNeutral2 px-2 py-[2px] lg:w-32 rounded-md ml-8 text-sizeNote flex justify-center items-center">
              <span className="text-[10px] lg:text-[14px]"> {timeStart} - {timeEnd}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-bold text-colorPrimary text-[17px] lg:text-sizeSubtitle">
              $ {item.amount}
            </span>
            <Link to={`/user/profile/purchases/detail${item.id}`} onClick={() => dispatch(setPurchaseId(item.id))}>
              <Button className=" h-[44px] normal-case border-2 font-bold border-colorPrimary bg-colorNeutral3 text-colorPrimary rounded-full">
                Ver Detalle
              </Button>
            </Link>
          </div>

          <ModalDeletePurchases handleOpen={handleOpen} open={open} deleteId={item.id} setPurchase={setPurchase} response1={response1} />
        </div>
      </section>
    </div>
  );
};

export default CardPurchases;
