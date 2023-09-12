import { Button } from '@material-tailwind/react';
import React from 'react';
import { BiArrowBack } from "react-icons/bi";
import { GrNext } from "react-icons/gr";
import cardCredit from '../assets/credit-card.svg'
import paymentMarket from '../assets/image 2.png'
import { Link } from 'wouter';

const PaymentOption = () => {

    const handleBack = () => {
        history.back();
    };

    return (
        <div className='h-screen'>

            <div className="flex  items-center text-left p-[2rem]  text-[24px] font-bold text-colorNeutral1">
                <Button
                    onClick={handleBack}
                    className="rounded-full p-1 border-2 border-colorNeutral1 bg-colorNeutral mr-3"
                >
                    <BiArrowBack size={16} className="text-colorNeutral1" />
                </Button>
                <h3>Pagar</h3>
            </div>

            <div className='mb-10 w-[343px] lg:w-[550px] m-auto lg:p-0'>
                <h3 className='text-[24px] font-bold text-colorNeutral1'>Métodos de pago</h3>
                <p className='my-3'>Elige el método de pago que prefieras.</p>
            </div>

            <div className='w-[343px] h-[168px] lg:w-[550px] lg:h-[368px] flex justify-center items-center rounded-lg border-2 border-colorNeutral2 m-auto '>

                <div className='w-[279px] flex flex-col gap-6 lg:gap-10'>
                    <div className='flex items-center justify-between border-b-2 border-colorNeutral2 h-[40px]'>
                        <div className='flex gap-2 items-center'>
                            <img src={cardCredit} alt="IconCardCredit" />
                            <span>Tarjeta de crédito o débito</span>
                        </div>
                        <Link to={"/payment/creditCard"}>
                            <button><GrNext /></button>
                        </Link>
                    </div>
                    <div className='flex items-center justify-between border-b-2 border-colorNeutral2 h-[40px]'>
                        <div className='flex gap-2 items-center' >
                            <img src={paymentMarket} alt="IconPaymentMarket" />
                            <span>Mercado pago</span>
                        </div>
                        <button><GrNext /></button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PaymentOption;