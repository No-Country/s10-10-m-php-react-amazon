import React from 'react';

const Mission = () => {
    return (
        <div>
            <h2 className='font-bold text-mainTextColor text-customSizeTitle mt-24 mb-10'>
                <span className='block'>Mensaje tipo ¡Salva</span>
                <span>alimentos y ahorra dinero!</span>
            </h2>
            <p className='font-bold text-mainTextColor'>
                Mensaje tipo Con Nombre de la App, ayudamos a reducir el desperdicio de alimentos
                conectando a usuarios con establecimientos que tienen excedentes del día.
            </p>
            <div className='flex justify-between my-8'>
                <button className='rounded-full bg-mainTextColor text-white w-widthMainBtn h-heightMainBtn' style={{ fontSize: "12px" }}>
                    Quiero salvar comida
                </button>
                <button className='rounded-full bg-white text-mainTextColor border border-black w-widthMainBtn h-heightMainBtn' style={{ fontSize: "12px" }}>
                    Quiero salvar comida
                </button>
            </div>
        </div>
    );
};

export default Mission;