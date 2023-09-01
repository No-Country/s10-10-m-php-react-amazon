import React, { useState } from 'react'
import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import { Form, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { navigate } from 'wouter/use-location';





const FormShop = () => {



    return (
        <div className='flex flex-col items-center bg-mainColor h-screen'>
            <div className='p-10 text-3xl mt-8 custom-tittle'>
                <p>¡Te damos la bienvenida de nuevo!</p>
                <div className='flex flex-col items-center h-screens'>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className='mt-15'>
                            <label htmlForm="name" className='text-left custom-label mb-3'>
                                Nombre del negocio
                            </label>
                            <Input size='lg' {...register("name", { required: true })}
                                id="name"
                                className='!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                                labelProps={{ className: hidden, }}
                                containerProps={{ className: "min-w-[100px]" }}
                                placeholder="Correo electronico"
                            />
                            {/*Colocar errores y validaciones del nombre del local aca */}

                            <label
                                htmlFor='text'
                                className='texx-left custom-label mb-3'
                                style={{ fontSize: "11px" }}
                            >

                                Tipo de negocio o categoria</label>
                        </div>
                        <Input size='lg' type="text" {...register("type", { required: true })}
                            id="type"
                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                                className: "hidden",
                            }}
                            containerProps={{ className: "min-w-[100px]" }}
                            placeholder="Tipo de negocios"
                        />
                        {/* COLOCAR LOS ERRORES */}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormShop
