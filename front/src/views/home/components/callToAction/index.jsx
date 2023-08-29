import { Button } from '@material-tailwind/react';
import Modal from './modal';
import useToggleVisibility from '../../../../utils/hooks/useToggleVisibility';

const CallToAction = () => {

  const [isVisible, handleVisible] = useToggleVisibility(true);

  return (
    <div className='relative'>
      <h2 className='text-mainColor leading-none text-sizeTitle font-weightTitle mt-28 mb-10'>
        Cómo funciona
      </h2>
      <h3 className='text-mainColor font-weightSubtitle leading-none text-sizeSubtitle'>
        ¿Eres un amante de la comida y el planeta?
      </h3>
      <Modal handleVisible={handleVisible} isVisible={isVisible} />
      <div>
        <p className='my-3 font-weightText text-sizeText text-mainColor '>
          Explora ofertas locales y rescata alimentos. Regístrate y
          compra a precios bajos. ¡Salva alimentos, marca la diferencia!
        </p>
        <div>
          <Button className='rounded-full normal-case bg-mainColor text-sizeTextButton font-weightTextButton text-white w-widthMainBtn h-heightMainBtn'
            onClick={handleVisible}
          >
            Saber más
          </Button>
        </div>
      </div>
      <h3 className='text-mainColor font-weightSubtitle leading-none text-sizeSubtitle mt-16'>
        ¿Tienes un negocio y odias el desperdicio?
      </h3>
      <div>
        <p className='my-3 font-weightText text-sizeText text-mainColor'>
          Únete, transforma excedentes en ingresos. Atrae clientes y sé más sostenible.
        </p>
        <div>
          <Button className='rounded-full bg-mainColor normal-case text-sizeTextButton font-weightTextButton text-white  w-widthMainBtn h-heightMainBtn'>
            Saber más
          </Button>
        </div>
      </div>
    </div>
  )

}




export default CallToAction;
