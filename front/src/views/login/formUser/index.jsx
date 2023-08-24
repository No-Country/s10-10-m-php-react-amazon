
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "wouter";



const Form = () => {

    return (
        <div>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-4">
                    <span className='text-left text-black font-bold -mb-3' style={{ fontSize: '11px' }}>Email</span>
                    <Input label="Email" size="lg" />
                    <span className='text-left text-black font-bold -mb-3' style={{ fontSize: '11px' }}>Contraseña</span>
                    <Input label="Contraseña" size="lg" />
                </div>
                <div className="-ml-2.5 text-left pl-3 text-gray-800 my-4" style={{ fontSize: '11px' }}>
                    <p>Todos los campos son obligatorios</p>
                    <span>La contraseña debe tener caracteres xxxx</span>
                </div>
                <div className="pt-0">
                    <Button variant="gradient" fullWidth className="rounded-full" type="submit">
                        Iniciar Sesion
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-between">
                        <span>¿No tienes cuenta?</span>
                        <span><Link to="/signup">Registrate aca</Link></span>
                    </Typography>
                </div>


            </form>
        </div>
    )
}
export default Form