import { Button } from '@material-tailwind/react';
import Modal from './modal';
import useToggleVisibility from '../../../../utils/hooks/useToggleVisibility';

const CallToAction = () => {

  const [isVisible, handleVisible] = useToggleVisibility(true);

  return (
    <div className='relative'>
      <h2 className='font-bold text-mainColor leading-none text-customSizeTitle mt-28 mb-10'>
        Cómo funciona
      </h2>
      <h3 className='font-bold text-mainColor leading-none text-[24px]'>
        ¿Eres un amante de la comida y el planeta?
      </h3>
      <Modal handleVisible={handleVisible} isVisible={isVisible} />
      <div>
        <p className='my-3 font-bold text-mainColor'>
          Explora ofertas locales y rescata alimentos. Regístrate y
          compra a precios bajos. ¡Salva alimentos, marca la diferencia!
        </p>
        <div>
          <Button className='rounded-full normal-case bg-mainColor text-white w-widthMainBtn h-heightMainBtn'
            style={{ fontSize: "12px" }}
            onClick={handleVisible}
          >
            Saber más
          </Button>
        </div>
      </div>
      <h3 className='font-bold text-mainColor text-[24px] leading-none mt-16'>
        ¿Tienes un negocio y odias el desperdicio?
      </h3>
      <div>
        <p className='my-3 font-bold text-mainColor'>
          Únete, transforma excedentes en ingresos. Atrae clientes y sé más sostenible.
        </p>
        <div>
          <Button className='rounded-full bg-mainColor normal-case text-white w-widthMainBtn h-heightMainBtn' style={{ fontSize: "12px" }}>
            Saber más
          </Button>
        </div>
      </div>
    </div>
  )

}




export default CallToAction;
