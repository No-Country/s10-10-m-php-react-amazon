import { useForm } from "react-hook-form";
import { Input, Button } from "@material-tailwind/react";
import { navigate } from "wouter/use-location";
import { useDispatch } from "react-redux";
import { setName, setCategory } from "../../../../../features/businessSlice";
import Maps from "./maps";

export default function FormShop() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const submit = (data) => {
    if (data.shopname && data.category) {
      dispatch(setName(data.shopname));
      dispatch(setCategory(data.category));
      navigate("/auth/shop/signup/store-manager");
    }
  };

  return (
    <div className="flex flex-col items-center bg-colorPrimary min-h-screen w-full">
      <h1 className="text-2xl font-bold p-3 text-white m-2 text-center">
        Únete y transforma excedentes en ingresos
      </h1>
      <p className="text-white text-sm mb-5">
        Ingresa información del <b>negocio</b>
      </p>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-3 bg-white p-5 m-2 rounded-lg max-w-md w-full">
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
              htmlFor="category"
              className="text-left text-mainColor text-sm"
            >
              Rubro
            </label>
            <select
              {...register("category", { required: true })}
              id="category"
              className=" w-full mt-1 p-2 border border-gray-300 bg-white text-gray-900 rounded-md"
            >
              <option value="" selected disabled>
                Elige una opción
              </option>
              <option value="panaderia">Panadería</option>
              <option value="supermercado">Supermercado</option>
              <option value="verduleria">Verdulería</option>
            </select>
            {errors.category && (
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
            <Maps />
          </div>

          <div className="relative">
            <label htmlFor="phone" className="text-left text-mainColor text-sm">
              Teléfono
            </label>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 mb-2 md:mb-0 md:mr-2">
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
              </div>
              <div className="w-full md:w-1/2">
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
}
