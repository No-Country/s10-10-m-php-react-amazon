import { Button } from '@material-tailwind/react';
import Modal from './modal';
import useToggleVisibility from '../../../../utils/hooks/useToggleVisibility';
import footLoverPerson from "../../assets/footLoverPerson.png"
import businessPerson from "../../assets/businessPerson.png"
import ModalBusiness from './modalBusiness';
import React, { useState } from 'react';

const CallToAction = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [isVisible2, handleVisible2] = useToggleVisibility(false);


  return (
    <div className='relative text-left'>
      <div className='bg-colorPrimary rounded-t-3xl h-[120px] px-[2rem] flex items-center'>
        <h2 className='text-colorNeutral3 leading-none  text-left text-sizeTitle font-weightTitle'>
          ¿Quieres saber cómo funciona?
        </h2>
      </div>

      <div>
        <img src={footLoverPerson} alt="imgFootLoverPerson" height={220} width={220} className='m-auto my-8' />
        <div className='px-[2rem]'>
          <h3 className='text-colorNeutral1 font-bold leading-none text-sizeSubtitle'>
            ¿Eres un amante de la comida y el planeta?
          </h3>
          <Modal handleOpen={handleOpen} open={open} />

          <div>
            <p className='my-3 font-weightText text-sizeText leading-none text-colorNeutral1'>
              Regístrate y compra alimentos a precios bajos. Explora locales y salva alimentos.
            </p>
          </div>
          <div className=''>
            <Button className='rounded-lg normal-case bg-colorNeutral3 border-2 border-colorPrimary  text-sizeTextButton font-weightTextButton w-[343px] h-[44px] text-colorPrimary'
              onClick={handleOpen}
            >
              Saber más
            </Button>
          </div>
        </div>

        <img src={businessPerson} alt="imgBusinessPerson" height={220} width={220} className='m-auto my-8' />
        <div className='px-[2rem]'>
          <h3 className="text-colorNeutral1 font-bold leading-none text-sizeSubtitle">
            ¿Tienes un negocio y odias el desperdicio?
          </h3>
          <ModalBusiness toggleVisibility2={handleVisible2} isVisible2={isVisible2} />
          <p className='my-3 font-weightText text-sizeText leading-none text-colorNeutral1'>
            Únete, transforma excedentes en ingresos. Atrae clientes y sé más sostenible.
          </p>
          <Button className='rounded-lg normal-case bg-colorNeutral3 border-2 border-colorPrimary  text-sizeTextButton font-weightTextButton w-[343px] h-[44px] text-colorPrimary'
            onClick={handleVisible2}
          >
            Saber más
          </Button>
        </div>
      </div>

    </div>
  )

}




export default CallToAction;
