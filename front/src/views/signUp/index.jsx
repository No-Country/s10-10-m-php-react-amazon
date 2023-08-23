import { IoArrowBackOutline } from 'react-icons/io5';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

const SignUp = () => {
  return (
    <div className="container flex flex-col items-center">
      <div className=' flex items-center justify-center relative w-80 mt-16 h-16 text-gray-800 mb-6'>
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
      <Card className="w-96">
        <CardBody className="flex flex-col gap-4">
          <span className='text-left text-black font-bold -mb-3' style={{ fontSize: '11px' }}>Nombre completo</span>
          <Input label="Nombre" size="lg" />
          <span className='text-left text-black font-bold -mb-3' style={{ fontSize: '11px' }}>Email</span>
          <Input label="Email" size="w-full" />
          <span className='text-left text-black font-bold -mb-3' style={{ fontSize: '11px' }}>Contraseña</span>
          <Input label="Contraseña" size="lg" />
          <div className="-ml-2.5 text-left pl-3" style={{ fontSize: '11px' }}>
            <p>Todos los campos son obligatorios</p>
            <span>La contraseña debe tener caracteres xxxx</span>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth className="rounded-full">
            Registrarse
          </Button>
          <Typography variant="small" className="mt-6 flex justify-between">
            <span>¿Ya tienes cuenta?</span>
            <span>Inicia sesión acá</span>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignUp
