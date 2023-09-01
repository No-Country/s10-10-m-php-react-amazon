import React from 'react';
import bagMobileImg from "../../assets/bag-mobileImg.png"

const AboutUs = () => {
    return (
        <div className='mb-28 text-left px-[2rem] sm:h-[771px] relative'>
            <img src={bagMobileImg} alt="bagMobileImg" className='absolute right-1/2 translate-x-1/2 -z-10' />
            <h2 className='font-weightTitle text-colorPrimary text-sizeTitle mt-28'>
                Sobre nosotros
            </h2>
            <h3 className='text-sizeSubtitle mt-3 font-bold'>Misión de Listo para llevar</h3>
            <section className='p-[1rem] bg-colorNeutral3 rounded-md border-[3px] w-[343px] h-[171px] my-2 border-[#FFDBCC]'>
                <p className='my-3 text-sizeText text-center font-weightText leading-none text-colorNeutral1'>
                    Nuestra misión es colaborar en la disminución y concientización del desperidicio de alimentos, brindando a negocios
                    de comida, la oportunidad de evitar el desecho de alimentos que se encuentran en óptimo estado para su consumo, y
                    obtener una ganancia.
                </p>
            </section>

            <h3 className='text-sizeSubtitle mt-8 font-bold'>Misión de Listo para llevar</h3>
            <section className='p-[1rem] rounded-md bg-colorNeutral3 border-[3px] w-[343px] h-[156px] my-2 border-[#FFDBCC]'>
                <p className='my-3 text-sizeText text-center font-weightText leading-none text-colorNeutral1'>
                    Nuestra visión es lograr que las personas accedan a alimentos en buen estado para su consumo a un precio menor,
                    ya que estaban a punto de ser desechados y generar contaminación.
                </p>
            </section>
        </div>
    );
};

export default AboutUs;