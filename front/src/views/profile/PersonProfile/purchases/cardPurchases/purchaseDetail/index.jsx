import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BiArrowBack } from "react-icons/bi";
import { Button } from '@material-tailwind/react';
import { getPurchaseById, updatePurchase } from '../../../../../../api/purchaseApi';
import { Toaster, toast } from 'sonner';
import axios from 'axios';
import { navigate } from 'wouter/use-location';

const PurchaseById = () => {

    const handleBack = () => {
        history.back();
    };

    // const [match, params] = useRoute("purchase/detail/:id");



    const [purchaseDetailId, setPurchaseDetailId] = useState(null)

    const idPurchase = useSelector((state) => state.purchaseId.purchaseId)

    useEffect(() => {
        getPurchaseById(token, idPurchase)
            .then((Response) => setPurchaseDetailId(Response.data))
            .catch((error) => {
                console.log(error);
            })
    }, [])




    const purchaseDetail = purchaseDetailId?.["Purchase:"][0];
    const timeStartParts = purchaseDetail?.pack?.time_start.split(" ")[1].split(":");
    const timeStart = `${timeStartParts?.[0]}:${timeStartParts?.[1]}`;
    const timeEndParts = purchaseDetail?.pack.time_end?.split(" ")[1].split(":");
    const timeEnd = `${timeEndParts?.[0]}:${timeEndParts?.[1]}`;


    const data = {
        "id": purchaseDetail?.id,
        "status": "delivered"
    }

    const token = useSelector((state) => state.user.token);

    const confirmPickup = async () => {
        try {
            const response = await updatePurchase(data, token);
            if (response.status === 201) {
                toast.success("La compra fue Recogida con éxito");
                navigate("/user/profile/purchases/confirm")
            }
        } catch (error) {
            console.error("Error al confirmar la recogida:", error);
            toast.error("Error al confirmar la recogida");
        }
    };


    return (
        <div className='w-full h-screen'>

            <div className="flex  items-center text-left p-[2rem]  text-[24px] font-bold text-colorNeutral1">
                <Button
                    onClick={handleBack}
                    className="rounded-full p-1 border-2 border-colorNeutral1 bg-colorNeutral mr-3"
                >
                    <BiArrowBack size={16} className="text-colorNeutral1" />
                </Button>
                <h3>Detalle de compra</h3>
            </div>

            <div className='w-[343px] h-[410px] m-auto rounded-lg border-2 border-colorNeutral2 '>

                <div className='w-full h-[250px] p-[2rem] flex flex-col justify-between '>
                    <h3 className='font-bold'>{purchaseDetail?.seller.name}</h3>
                    <div className='flex justify-between items-center'>
                        <span>{purchaseDetail?.pack.name}(X{purchaseDetail?.amount / purchaseDetail?.pack.price}) </span>
                        <span>${purchaseDetail?.amount}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span>Costo del Servicio</span>
                        <span>$0</span>
                    </div>
                    <div className='flex justify-between items-center font-bold'>
                        <span>Total</span>
                        <span>${purchaseDetail?.amount}</span>
                    </div>
                    <div className='h-[1px] w-full border-b-2 border-colorNeutral2'></div>
                </div>

                <div className='bg-colorPrimary w-full h-[160px] rounded-lg flex flex-col justify-evenly px-[2rem] text-sizeText text-colorNeutral3'>
                    <div className='flex justify-between items-center'>
                        <p>ID de compra</p>
                        <span>{purchaseDetail?.code}</span>
                    </div>
                    <div className='flex justify-between items-center  text-center'>
                        <p>Recoger a las</p>
                        <span className='border-[2px] border-colorNeutral2 px-2 py-[2px] rounded-md text-[12px] '>
                            {timeStart} - {timeEnd}
                        </span>
                    </div>
                    <div className='flex justify-between items-center '>
                        <p>Ubicación</p>
                        <span className='text-[13px] border-b-[1px] border-colorNeutral3'>{"Avenida Costanera 83"}</span>
                    </div>
                </div>
                {
                    purchaseDetail?.status !== "delivered" && (
                        <Button className='font-bold w-[343px] rounded-full normal-case text-[16px] bg-colorPrimary text-buttonFilledColor m-auto my-10'
                            onClick={() => confirmPickup()}
                        >
                            Confirmar recogida
                        </Button>
                    )
                }

            </div>
            <Toaster richColors />
        </div>
    );
};

export default PurchaseById;