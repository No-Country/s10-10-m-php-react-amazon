import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { deletePurchase } from '../../../../../../../api/purchaseApi';
import { useSelector } from 'react-redux';
import { Toaster, toast } from 'sonner';
import { getPurchases } from '../../../../../../../api/authApi';


const ModalDeletePurchases = ({ handleOpen, open, deleteId }) => {

    const token = useSelector((state) => state.user.token)

    const [data, setData] = useState(null)

    const purchaseDeleted = async () => {
        try {
            const response = await deletePurchase(token, deleteId);
            setData(response)
            if (response.status === 200) {
                toast.success("eliminado con éxito");
                window.location.reload()
            }
            console.log(response);
        } catch (error) {
            console.log("Error al eliminar la compra", error);
        }
    }

    return (

        <>
            <Dialog open={open} handler={() => handleOpen()} className='h-[200px] py-[1rem] flex flex-col justify-between'>
                <DialogBody className=' text-sizeText text-colorNeutral1'>
                    ¿Estas seguro que quieres elimar este pack?
                </DialogBody>
                <div className='flex justify-end px-[1rem] gap-4'>
                    <Button
                        onClick={() => handleOpen()}
                        className="mr-1 bg-colorNeutral3 text-colorPrimary rounded-full border-2 border-colorPrimary"
                    >
                        <span>Cancelar</span>
                    </Button>
                    <Button className='bg-colorPrimary text-colorNeutral3 rounded-full  border-colorPrimary'
                        onClick={() => { purchaseDeleted() && handleOpen() }}
                    >
                        <span>Eliminar</span>
                    </Button>
                </div>
            </Dialog>
            <Toaster richColors />
        </>
    );
};

export default ModalDeletePurchases;