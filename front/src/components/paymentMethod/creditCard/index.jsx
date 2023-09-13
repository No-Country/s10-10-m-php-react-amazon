import { Button, Checkbox } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { BiArrowBack } from "react-icons/bi";
import {
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import { Link } from 'wouter';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';

const formatCardNumber = (value) => {
    const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = val.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
        return parts.join(" ");
    } else {
        return value;
    }
}
const formatExpires = (value) => {
    return value
        .replace(/[^0-9]/g, "")
        .replace(/^([2-9])$/g, "0$1")
        .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
        .replace(/^0{1,}/g, "0")
        .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

const CreditCard = () => {

    const [cardNumber, setCardNumber] = useState("");
    const [cardExpires, setCardExpires] = useState("");

    const user = useSelector((state) => state.user);

    const { register, handleSubmit } = useForm()


    const handleBack = () => {
        history.back();
    };

    const submit = (data) => {
        console.log(data);
    }

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
                <h3 className='text-[24px] font-bold text-colorNeutral1'>Tarjeta de crédito o débito</h3>
            </div>

            <form onSubmit={handleSubmit(submit)} className='w-[343px] lg:w-[550px] m-auto'>

                <Card className='w-[343px] h-[238px] px-[1rem] lg:w-[550px]  lg:h-[278px] flex justify-center items-center rounded-lg border-2 border-colorNeutral2 m-auto '>
                    <div className="my-6 flex flex-col items-center gap-10 ">
                        <Input
                            label="CardNumber"
                            maxLength={19}
                            value={formatCardNumber(cardNumber)}
                            onChange={(event) => setCardNumber(event.target.value)}
                            {...register("cardNumber")}
                        // icon={
                        //     <CreditCardIcon className="h-5 w-5 text-blue-gray-300" />
                        // }
                        />
                        <div className="flex items-center gap-4">
                            <Input
                                label="Expires"
                                maxLength={5}
                                value={formatExpires(cardExpires)}
                                onChange={(event) => setCardExpires(event.target.value)}
                                containerProps={{ className: "min-w-[72px]" }}
                                {...register("expiries")}
                            />
                            <Input
                                label="CVC"
                                maxLength={4}
                                containerProps={{ className: "min-w-[72px]" }}
                                {...register("CVV")}
                            />
                        </div>

                    </div>
                </Card>

                <Checkbox
                    className="rounded-full bg-white h-4 w-4 p-0 my-6"
                    label={
                        <Typography
                            variant="small"
                            className="text-colorNeutral1 p-0"
                        >
                            Marcar como predeterminado.
                        </Typography>
                    }
                />

                <div>
                    <Link to=''>
                        <span className='border-b-2 border-colorNeutral1 text-[14px]'>Haz click aquí para consultar nuestra <b>política de cancelación</b>.</ span>
                    </Link>
                </div>

                <Button className='rounded-full w-full lg:w-[353px]  bg-colorPrimary normal-case text-buttonFilledColor my-12 h-[44px]'>
                    Pagar
                </Button>

            </form>

        </div >
    );
};

export default CreditCard;