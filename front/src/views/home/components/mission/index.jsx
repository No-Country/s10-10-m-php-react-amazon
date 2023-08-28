import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'wouter';

const Mission = () => {
    return (
        <div>
            <h2 className='font-bold text-mainColor leading-none text-customSizeTitle mt-24 mb-10'>
                <span className='block'>Mensaje tipo ¡Salva</span>
                <span>alimentos y ahorra dinero!</span>
            </h2>
            <p className='font-bold text-mainColor'>
                Mensaje tipo Con Nombre de la App, ayudamos a reducir el desperdicio de alimentos
                conectando a usuarios con establecimientos que tienen excedentes del día.
            </p>
            <div className='flex justify-between my-8'>
                <Button className='rounded-full normal-case bg-mainColor p-0 text-white w-widthMainBtn h-heightMainBtn' style={{ fontSize: "12px" }}>
                    Quiero salvar comida
                </Button>
                <Button className='rounded-full normal-case p-0 bg-white text-mainColor border border-black w-widthMainBtn h-heightMainBtn' style={{ fontSize: "12px" }}>
                    Quiero vender comida
                </Button>
            </div>
        </div>
    );
};

export default Mission;