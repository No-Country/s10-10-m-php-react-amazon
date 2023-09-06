import { useForm } from 'react-hook-form'
import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import React, { useState } from 'react'
import { Link } from "wouter";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { validatePassword } from '../../../../../utils/validatePassword';

const FormShop = ({ setData, data }) => {
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const [error, setError] = useState("");
    const [isVisible, setIsVisible] = useState(true);

    const submit = (info) => {
        const passwordError = validatePassword(info.password);
        setError(passwordError);

        if (!passwordError) {
            const updatedData = {
                ...data,
                fullname: info.shopname,
                lastname: info.type,
                email: info.email,
                password: info.password,
            };
            setData(updatedData);
        }
    };
    const handleChangeVisible = () => {
        setIsVisible(!isVisible);
    };


    return (
        <div className="flex flex-col items-center bg-mainColor h-screen">
            <div className="text-sizeTitle text-colorNeutral3 font-weightTitle leading-tight mt-8 text-center">
                <p> ¡Unete, transforma excedente en ingresos!</p>
            </div>

            <form
                onSubmit={handleSubmit(submit)}
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
                <div className="mb-4 flex flex-col gap-4">
                    <label
                        htmlFor="shopname"
                        className="text-left custom-label -mb-3 "
                        style={{ fontSize: "11px" }}
                    >
                        Nombre del negocio
                    </label>
                    <Input
                        size="lg"
                        {...register("shopname", { required: true })}
                        id="shopname"
                        className={`bg-white ${errors.shopname ? "border-red-500" : ""}`}
                        placeholder="Nombre del negocio"
                    />
                    {errors.shopname && (
                        <p className="text-red-500">Campo obligatorio</p>
                    )}
                    <label
                        htmlFor="fullname"
                        className="text-left custom-label -mb-3 "
                        style={{ fontSize: "11px" }}
                    >
                        Tipo de negocio o categoria
                    </label>
                    <select
                        size="lg"
                        {...register("type", { required: true })}
                        id="type"
                        className={`bg-white ${errors.type ? "border-red-500" : ""}`}
                    >
                        <option value="">Selecciona una categoría</option>
                        <option value="panaderia">Panadería</option>
                        <option value="verduleria">Verdulería</option>
                        <option value="supermercado">Supermercado</option>
                        <option value="kiosco">Kiosco</option>
                    </select>

                    {errors.type && (
                        <p className="text-red-500">Campo obligatorio</p>
                    )}

                    <label
                        htmlFor="email"
                        className="text-left custom-label -mb-3 "
                        style={{ fontSize: "11px" }}
                    >
                        Correo electronico
                    </label>
                    <Input
                        size="lg"
                        {...register("email", { required: true })}
                        id="email"
                        className={`bg-white ${errors.email ? "border-red-500" : ""}`}
                        placeholder="Correo electronico"
                    />
                    {errors.email && (
                        <p className="text-red-500">Campo obligatorio</p>
                    )}



                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="text-left custom-label -mb-3"
                            style={{ fontSize: "11px" }}
                        >
                            Contraseña
                        </label>
                        <Input
                            size="lg"
                            {...register("password", { required: true })}
                            type={isVisible ? "password" : "text"}
                            id="password"
                            placeholder="Contraseña"
                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:custom-placeholder focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                                className: "hidden",
                            }}
                            containerProps={{ className: "min-w-[100px]" }}
                        />

                        <button
                            className="absolute right-2 top-1/2 text-2xl text-mainColor"
                            type="button"
                            onClick={handleChangeVisible}
                        >
                            {isVisible ? <BsEye /> : <BsEyeSlash />}{" "}
                        </button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    {errors.password && (
                        <p className="text-red-500">Campo obligatorio</p>
                    )}
                </div>
                <Checkbox
                    label={
                        <Typography variant="small" color="gray" className="flex items-center custom-textButton">
                            Acepto
                            <a href="#" className="font-medium transition-colors text-secondColorTextForms hover:text-gray-900 ">
                                &nbsp;terminos y Condiciones
                            </a>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5 my-3" }}
                />
                <div className="pt-0">
                    <Button
                        variant="gradient"
                        fullWidth
                        className="rounded-full custom-buttonCTAs normal-case"
                        type="submit"
                    >
                        Continuar
                    </Button>

                    <Typography variant="small" className="mt-6 flex justify-between custom-textButton  pb-8">
                        <Link to='/auth/shop/login'>
                            <span>¿Ya tienes cuenta?</span>
                        </Link>
                        <Link to="/auth/shop/login">Inicia sesión acá</Link>
                    </Typography>
                </div>
            </form>
        </div>



    )
}

export default FormShop
