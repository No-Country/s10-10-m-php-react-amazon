import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h2 className='font-bold text-mainColor text-customSizeTitle mt-28'>
                Quiénes somos
            </h2>
            <p className='my-3 font-bold text-mainColor'>
                Mensaje tipo Con Nombre de la App, ayudamos a reducir el desperdicio de alimentos
                conectando a usuarios con establecimientos que tienen excedentes del día.
            </p>
            <section>
                <h4 className='text-[24px] text-mainColor font-bold mt-12 mb-8'>Problema</h4>
                <p className='my-3 font-bold text-mainColor'>
                    Únete, transforma excedentes en ingresos. Atrae clientes y sé más sostenible.
                </p>
                <h4 className='text-[24px] text-mainColor font-bold my-8'>Objetivo</h4>
                <p className='my-3 font-bold text-mainColor'>
                    Únete, transforma excedentes en ingresos. Atrae clientes y sé más sostenible.
                </p>
                <h4 className='text-[24px] text-mainColor font-bold my-8'>Solución</h4>
                <p className='my-3 font-bold text-mainColor'>
                    Únete, transforma excedentes en ingresos. Atrae clientes y sé más sostenible.
                </p>
            </section>
        </div>
    );
};

export default AboutUs;