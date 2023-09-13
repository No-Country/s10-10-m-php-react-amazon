import React from 'react';
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";


const ModalDeletePurchases = ({ handleOpen, open }) => {

    return (

        <>
            <Dialog open={open} handler={() => handleOpen()} className='h-[200px] py-[1rem] flex flex-col justify-between'>
                <DialogBody className=' text-sizeText text-colorNeutral1'>
                    ¿Estas seguro que quieres eilimar este pack?
                </DialogBody>
                <div className='flex justify-end px-[1rem] gap-4'>
                    <Button
                        onClick={() => handleOpen()}
                        className="mr-1 bg-colorNeutral3 text-colorPrimary rounded-full border-2 border-colorPrimary"
                    >
                        <span>Cancelar</span>
                    </Button>
                    <Button className='bg-colorPrimary text-colorNeutral3 rounded-full  border-colorPrimary' onClick={() => handleOpen()}>
                        <span>Eliminar</span>
                    </Button>
                </div>
            </Dialog>
        </>
    );
};

export default ModalDeletePurchases;