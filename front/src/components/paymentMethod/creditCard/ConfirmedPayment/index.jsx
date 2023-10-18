import React from 'react';
import checkCircle from "../../assets/check-circle.svg"
import { Button } from '@material-tailwind/react';
import { Link } from 'wouter';
import { useSelector } from 'react-redux';



const ConfirmedPayment = () => {

    const purchaseId = useSelector((state) => state.purchaseId.purchaseId);
    console.log(purchaseId);

    return (
        <div className='h-screen bg-colorPrimary flex flex-col justify-center items-center'>
            <div className='w-[343px] lg:w-[543px] lg:p-10 h-[341px] lg:h-[300px] rounded-lg bg-colorNeutral3 flex flex-col justify-evenly items-center'>
                <div className='w-full h-24 flex justify-center items-center'>
                    <img src={checkCircle} alt="checkCircle" />
                </div>
                <div className='text-sizeText text-center'>
                    <p> ¡Tu compra se ha completado con éxito! Recibirás tu farctura en tu correo electrónico.</p>
                    <span className='font-bold'>Gracias por elegirnos</span>
                </div>
            </div>

            <div className='flex flex-col justify-between items-center mt-16 lg:mt-10 h-28 '>
                <Link to={`/user/profile/purchases/detail${purchaseId}`}>
                    <Button className='w-[343px] h-[44px] rounded-full text-colorPrimary bg-buttonFilledColor'>Ver detalle de compra</Button>
                </Link>
                <Link to='/'>
                    <Button className='w-[343px] h-[42px] rounded-full text-buttonFilledColor bg-colorPrimary border-2 border-buttonFilledColor'>Volver al inicio</Button>
                </Link>
            </div>

        </div >
    );
};

export default ConfirmedPayment;