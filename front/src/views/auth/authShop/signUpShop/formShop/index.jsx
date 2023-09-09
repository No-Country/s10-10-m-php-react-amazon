import { useForm } from "react-hook-form";
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "wouter";
import { validatePassword } from "../../../../../utils/validatePassword";

const FormShop = ({ setData, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const submit = (info) => {
    const passwordError = validatePassword(info.password);
    setError(passwordError);

    if (!passwordError) {
      const updatedData = {
        ...data,
        shopname: info.shopname,
        type: info.type,
        email: info.email,
        password: info.password,
      };
      setData(updatedData);
    }
  };

  return (
    <div className="flex flex-col items-center bg-colorPrimary min-h-screen">
      <h1 className="text-2xl font-bold p-3 text-white m-2 text-center">
        Únete y transforma excedentes en ingresos
      </h1>
      <p className="text-white text-sm mb-5">
        Ingresa información del <b>negocio</b>
      </p>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-3 bg-white p-5 m-2 rounded-lg">
          <div className="relative">
            <label
              htmlFor="shopname"
              className="text-left text-mainColor text-sm"
            >
              Nombre del negocio
            </label>
            <Input
              {...register("shopname", { required: true })}
              id="shopname"
              className={`!border !border-gray-300 bg-white text-gray-900  ${
                errors.shopname ? "border-red-500" : ""
              }`}
              labelProps={{
                className: "hidden",
              }}
            />
            {errors.shopname && (
              <p className="text-red-500">Campo obligatorio</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="businessLine"
              className="text-left text-mainColor text-sm"
            >
              Rubro
            </label>
            <select
              {...register("businessLine", { required: true })}
              id="businessLine"
              className=" w-full mt-1 p-2 border border-gray-300 bg-white text-gray-900 rounded-md"
            >
              <option value="" disabled>
                Elige una opción
              </option>
              <option value="panaderia">Panadería</option>
              <option value="supermercado">Supermercado</option>
              <option value="verduleria">Verdulería</option>
            </select>
            {errors.businessLine && (
              <p className="text-red-500">Campo obligatorio</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="address"
              className="text-left text-mainColor text-sm"
            >
              Ubicación
            </label>
            <Input
              {...register("address", { required: true })}
              id="address"
              className={`!border !border-gray-300 bg-white text-gray-900  ${
                errors.address ? "border-red-500" : ""
              }`}
              labelProps={{
                className: "hidden",
              }}
              placeholder="Ingresa un domicilio"
            />
            {errors.address && (
              <p className="text-red-500">Campo obligatorio</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="areaCode"
              className="text-left text-mainColor text-sm"
            >
              Teléfono
            </label>
            <div className="flex flex-row">
              <Input
                {...register("areaCode", { required: true })}
                id="areaCode"
                className={`!border !border-gray-300 bg-white text-gray-900 ${
                  errors.areaCode ? "border-red-500" : ""
                }`}
                labelProps={{
                  className: "hidden",
                }}
                placeholder="Cod. de Área"
              />
              <div className="mx-2"></div>
              <Input
                {...register("phoneNumber", { required: true })}
                id="phoneNumber"
                className={`!border !border-gray-300 bg-white text-gray-900 ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
                labelProps={{
                  className: "hidden",
                }}
                placeholder="Número"
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500">Campo obligatorio</p>
            )}
          </div>
        </div>
        <div className="mt-10 m-2">
          <Button
            fullWidth
            className="rounded-full normal-case bg-buttonFilledColor text-colorPrimary text-sm"
            type="submit"
          >
            Continuar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormShop;
