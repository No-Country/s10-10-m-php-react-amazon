import { useForm } from "react-hook-form";
import {
    Input,
    Button,
    Typography,
    Checkbox,
} from "@material-tailwind/react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const FormUser = () => {

    const { register, handleSubmit } = useForm();

    const submit = (data) => {
        console.log(data);
    }

    const [isVisible, setIsVisible] = useState(true);

    const handleChangeVisible = () => {
        setIsVisible(!isVisible)

    }
    console.log(isVisible);

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-4">
                    <label htmlFor="name" className='text-left text-secondColorTextForms font-bold -mb-3' style={{ fontSize: '11px' }}>Nombre completo</label>
                    <Input size="lg" {...register('name')} id="name" className="bg-white" placeholder="Nombre" />
                    <label htmlFor="email" className='text-left text-secondColorTextForms font-bold -mb-3' style={{ fontSize: '11px' }}>Email</label>
                    <Input size="lg" {...register('email')} id="email" className="bg-white" placeholder="Email" />
                    <div className="relative">
                        <label htmlFor="password" className='text-left text-secondColorTextForms font-bold -mb-3' style={{ fontSize: '11px' }}>Contraseña</label>
                        <Input size="lg" {...register('password')} type={isVisible ? "password" : "text"} id="password" className="bg-white" placeholder="Contraseña" />
                        <button className="absolute right-2 top-1/2 text-2xl text-mainColor" type="button" onClick={handleChangeVisible}>{isVisible ? < BsEye /> : <BsEyeSlash />} </button>
                    </div>
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
                    containerProps={{ className: "-ml-2.5 my-3" }}
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