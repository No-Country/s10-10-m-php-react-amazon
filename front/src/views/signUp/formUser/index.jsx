import { useForm } from "react-hook-form";
import {
    Input,
    Button,
    Typography,
    Checkbox,
} from "@material-tailwind/react";

const FormUser = () => {

    const { register, handleSubmit } = useForm();

    const submit = (data) => {
        console.log(data);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-4">
                    <label htmlFor="name" className='text-left text-secondColorTextForms font-bold -mb-3' style={{ fontSize: '11px' }}>Nombre completo</label>
                    <Input size="lg" {...register('name')} id="name" className="bg-white" placeholder="Nombre" />
                    <label htmlFor="email" className='text-left text-secondColorTextForms font-bold -mb-3' style={{ fontSize: '11px' }}>Email</label>
                    <Input size="lg" {...register('email')} id="email" className="bg-white" placeholder="Email" />
                    <label htmlFor="password" className='text-left text-secondColorTextForms font-bold -mb-3' style={{ fontSize: '11px' }}>Contraseña</label>
                    <Input size="lg" {...register('password')} id="password" className="bg-white" placeholder="Contraseña" />
                </div>
                <Checkbox
                    label={
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal text-secondColorTextForms"
                        >
                            Acepto
                            <a
                                href="#"
                                className="font-medium transition-colors text-secondColorTextForms hover:text-gray-900 "
                            >
                                &nbsp;terminos y Condiciones
                            </a>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <div className="pt-0">
                    <Button variant="gradient" fullWidth className="rounded-full" type="submit">
                        Registrarse
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-between text-secondColorTextForms pb-8">
                        <span>¿Ya tienes cuenta?</span>
                        <span className="border-b-2 border-secondColorTextForms "><a href="/login">Inicia sesión acá</a></span>
                    </Typography>
                </div>
            </form>
        </div>
    );
};

export default FormUser;