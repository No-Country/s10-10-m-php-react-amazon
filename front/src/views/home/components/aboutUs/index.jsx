import React from 'react';

const AboutUs = () => {
    return (
        <div className='mb-28'>
            <h2 className='font-weightTitle text-mainColor text-sizeTitle mt-28'>
                Quiénes somos
            </h2>
            <p className='my-3 text-sizeText font-weightText text-mainColor'>
                Mensaje tipo Con Nombre de la App, ayudamos a reducir el desperdicio de alimentos
                conectando a usuarios con establecimientos que tienen excedentes del día.
            </p>
            <section>
                <h4 className='text-sizeSubtitle text-mainColor font-weightSubtitle mt-12 mb-8'>Problema</h4>
                <p className='my-3 text-sizeText font-weightText text-mainColor'>
                    Únete, transforma excedentes en ingresos. Atrae clientes y sé más sostenible.
                </p>
                <h4 className='text-sizeSubtitle text-mainColor font-weightSubtitle my-8'>Objetivo</h4>
                <p className='my-3 text-sizeText font-weightText text-mainColor'>
                    Únete, transforma excedentes en ingresos. Atrae clientes y sé más sostenible.
                </p>
                <h4 className='text-sizeSubtitle text-mainColor font-weightSubtitle my-8'>Solución</h4>
                <p className='my-3 text-sizeText font-weightText text-mainColor'>
                    Únete, transforma excedentes en ingresos. Atrae clientes y sé más sostenible.
                </p>
            </section>
        </div>
    );
};

export default AboutUs;