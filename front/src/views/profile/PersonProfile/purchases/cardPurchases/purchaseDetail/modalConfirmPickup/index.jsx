import React from 'react';
import checkCircle from "../../../../../../../assets/check-circle.svg"
import { Link } from 'wouter';
import { Button } from '@material-tailwind/react';

const ModalConfirmPickup = () => {



    return (
        <div className='h-screen bg-colorPrimary flex flex-col justify-center items-center'>
            <div className='w-[343px] lg:w-[543px] lg:p-10 h-[341px] lg:h-[300px] rounded-lg bg-colorNeutral3 flex flex-col justify-evenly items-center'>
                <div className='w-full h-24 flex justify-center items-center'>
                    <img src={checkCircle} alt="checkCircle" />
                </div>
                <div className='text-sizeText text-center h-[90px] flex flex-col justify-between'>
                    <p className='font-bold'> ¡Entrega confirmada!</p>
                    <span className='font-bold text-center'>Gracias por sumarte a un mundo más sostenible.</span>
                </div>
            </div>

            <div className='flex flex-col justify-between items-center mt-16 lg:mt-10 h-28 '>
                <Link to={'/user/profile/purchases'}>
                    <Button className='w-[343px] h-[44px] rounded-full text-colorPrimary bg-buttonFilledColor normal-case'>Ver mis compras</Button>
                </Link>
                <Link to='/'>
                    <Button className='w-[343px] h-[42px] rounded-full text-buttonFilledColor bg-colorPrimary border-2 border-buttonFilledColor normal-case'>Volver al inicio</Button>
                </Link>
            </div>

        </div >
    );
};

export default ModalConfirmPickup;