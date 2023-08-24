import { IoArrowBackOutline } from 'react-icons/io5';
import FormUser from './formUser';

const SignUp = () => {

  return (
    <div className=" flex flex-col items-center">
      <div className=' flex items-center justify-center relative w-80 h-16 text-gray-800 mb-6'>
        <button className='absolute left-0  text-xl'>
          <IoArrowBackOutline />
        </button>
        <div>
          <h3 className='text-center text-gray-800 font-bold' style={{ fontSize: '11px' }}>Registrate con Email</h3>
        </div>
      </div>
      <div className='w-48 leading-tight font-bold  text-gray-800 text-center'>
        <p>Mensaje tipo  en horabuena estás a un toque de salvar comida</p>
      </div>
      <FormUser />
    </div>
  );
}

export default SignUp
