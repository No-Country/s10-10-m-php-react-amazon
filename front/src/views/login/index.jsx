import { IoArrowBackOutline } from 'react-icons/io5';
import Form from './formUser';

const Login = () => {

  return (
    <div className="flex flex-col items-center" >
      <div className='flex items-center justify-center relative w-80 h-16 text-gray-800 mb-6'>
        <button className='absolute left-0 text-xl'>
          <IoArrowBackOutline size={25} />
        </button>
        <div>
          <h1 className='text-center text-gray-800 font-bold' >Iniciar Sesion</h1>
        </div>
      </div>
      <div className='w-48 leading-tight font-bold text-gray-800 text-center'>
        <p>Mensaje tipo en horabuena estás a un toque de salvar comida</p>
      </div>
      <div className="flex flex-col items-center mt-5">
        <Form />
      </div>
    </div>
  );
}

export default Login;

