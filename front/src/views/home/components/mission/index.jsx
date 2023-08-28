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
                <button className='rounded-full bg-mainColor text-white w-widthMainBtn h-heightMainBtn' style={{ fontSize: "12px" }}>
                    <Link to='auth/user/login'>Quiero salvar comida</Link>
                </button>
                <button className='rounded-full bg-white text-mainColor border border-black w-widthMainBtn h-heightMainBtn' style={{ fontSize: "12px" }}>
                   <Link to='auth/seller/login'> Quiero vender comida</Link>
                </button>
            </div>
        </div>
    );
};

export default Mission;