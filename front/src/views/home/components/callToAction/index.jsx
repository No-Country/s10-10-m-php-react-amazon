import React from 'react';

const CallToAction = () => {
    return (
        <div>
            <h2 className='font-bold text-mainColor leading-none text-customSizeTitle mt-28'>
                ¿Eres un amante de la comida y el planeta?
            </h2>
            <div>
                <p className='my-3 font-bold text-mainColor'>
                    Explora ofertas locales y rescata alimentos. Regístrate y
                    compra a precios bajos. ¡Salva alimentos, marca la diferencia!
                </p>
                <div>
                    <button className='rounded-full bg-mainColor text-white w-widthMainBtn h-heightMainBtn' style={{ fontSize: "12px" }}>
                        Quiero salvar comida
                    </button>
                </div>
            </div>
            <h2 className='font-bold text-mainColor text-customSizeTitle leading-none mt-16'>
                ¿Tienes un negocio y odias el desperdicio?
            </h2>
            <div>
                <p className='my-3 font-bold text-mainColor'>
                    Únete, transforma excedentes en ingresos. Atrae clientes y sé más sostenible.
                </p>
                <div>
                    <button className='rounded-full bg-mainColor text-white w-widthMainBtn h-heightMainBtn' style={{ fontSize: "12px" }}>
                        Quiero salvar comida
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;