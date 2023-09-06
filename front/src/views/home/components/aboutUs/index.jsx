import React from 'react';
import bagMobileImg from "../../assets/bag-mobileImg.png"
import bagDesktop from "../../assets/bag-desktop.png"

const AboutUs = () => {
    return (
        <div className='mt-18 lg:mb-0 text-left  h-[771px] lg:h-[1440px] relative w-full lg:flex justify-center items-center'>
            <img src={bagMobileImg} alt="bagMobileImg" className='lg:hidden w-full h-[771px] sm:block absolute right-1/2 translate-x-1/2 -z-10' />
            <img src={bagDesktop} alt="bagDesktop" className='hidden lg:block w-full absolute bottom-0 -z-10' />

            <div className='w-full m-auto pl-[2rem]'>

                <h2 className='font-weightTitle lg:hidden text-colorPrimary text-sizeTitle mt-28'>
                    Sobre nosotros
                </h2>

                <div className='lg:flex items-center justify-evenly w-full'>

                    <div className='relative'>
                        <h2 className='font-weightTitle hidden lg:block text-colorPrimary text-sizeTitle mt-28 absolute left-0 -top-36'>
                            Sobre nosotros
                        </h2>
                        <h3 className='text-sizeSubtitle mt-3 font-bold lg-my-3'>Misión de Listo para llevar</h3>
                        <section className='p-[1rem] bg-colorNeutral3 rounded-md border-[3px] w-[343px] lg:min-w-[500px] h-[171px] lg:h-[250px] my-2 border-[#FFDBCC] lg:flex justify-center items-center lg:px-[3rem]'>
                            <p className='text-sizeText text-center font-weightText leading-none text-colorNeutral1 '>
                                Nuestra misión es colaborar en la <b>disminución y concientización del desperidicio de alimentos</b>, brindando <b>a negocios
                                    de comida</b>, la oportunidad de <b>evitar el desecho</b> de alimentos que se encuentran en óptimo estado para su consumo, y
                                <b>obtener una ganancia</b>.
                            </p>
                        </section>
                    </div>

                    <div>
                        <h3 className='text-sizeSubtitle mt-8 font-bold lg:my-3 '>Misión de Listo para llevar</h3>
                        <section className='p-[1rem] rounded-md bg-colorNeutral3 border-[3px] w-[343px] lg:w-[500px] h-[156px] lg:h-[250px] my-2 border-[#FFDBCC] lg:flex justify-center items-center lg:px-[3rem]'>
                            <p className='my-3 text-sizeText text-center font-weightText leading-none text-colorNeutral1'>
                                Nuestra visión es lograr que las personas <b>accedan a alimentos</b> en buen estado para su consumo a un <b>precio menor</b>,
                                ya que estaban <b>a punto de ser desechados</b> y generar contaminación.
                            </p>
                        </section>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default AboutUs;