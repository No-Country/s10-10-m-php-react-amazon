import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { BiArrowBack } from "react-icons/bi";
import { GrNext } from "react-icons/gr";
import cardCredit from '../assets/credit-card.svg'
import paymentMarket from '../assets/image 2.png'
import { Link } from 'wouter';
import axios from 'axios';
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useSelector } from 'react-redux';


const PaymentOption = () => {

    const handleBack = () => {
        history.back();
    };



    const quantity = useSelector((state) => state.quantity.quantity);
    const item = useSelector((state) => state.item.item)
    const [preferenceId, setPreferenceId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    initMercadoPago("TEST-9e8b3f4f-c4b6-4c5d-9c99-ce8dc363b227");

    console.log("preferenceId", preferenceId);
    const user = useSelector((state) => state.user);
    const token = user.token

    const createPreference = async () => {
        setIsLoading(true);

        const orderData = {
            quantity: quantity,
            price: item.price * quantity,
            description: "item",

        };

        console.log(orderData)

        try {
            const response = await axios.post(
                "https://s10-10-m-php-react-amazon-production.up.railway.app/api/create_preference",
                orderData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            setPreferenceId(response.data.preference_id);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
            console.log("from handleBuy", id);
        }
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
                        <button onClick={handleBuy}><GrNext /></button>
                    </div>
                    {preferenceId && <Wallet initialization={{ preferenceId }} />}
                </div>

            </div>

        </div>
    );
};

export default PaymentOption;