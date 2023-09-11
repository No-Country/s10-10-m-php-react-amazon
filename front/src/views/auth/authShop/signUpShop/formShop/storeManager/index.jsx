import { useForm } from "react-hook-form";
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import { navigate } from "wouter/use-location";

const StoreManager = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [managerName, setmanagerName] = useState("");
  const [dni, setDni] = useState("");

  const submit = (data) => {
    setmanagerName(data.managerName);
    setDni(data.dni);
    if (data) {
      navigate("/auth/shop/signup/store-signup");
    }
  };

  return (
    <div className="flex flex-col items-center bg-colorPrimary min-h-screen">
      <h1 className="text-2xl font-bold p-3 text-white m-2">
        Únete y transforma excedentes en ingresos
      </h1>
      <p className="text-white text-sm mb-5">
        Información del <b>dueño/encargado</b>
      </p>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-3 bg-white p-5 m-2  rounded-lg">
          <div className="relative">
            <label
              htmlFor="managerName"
              className="text-left text-mainColor text-sm"
            >
              Nombre completo
            </label>
            <Input
              {...register("managerName", { required: true })}
              id="managerName"
              className={`!border !border-gray-300 bg-white text-gray-900 ${
                errors.managerName ? "border-red-500" : ""
              }`}
              labelProps={{
                className: "hidden",
              }}
            />
            {errors.dni && (
              <p className="text-red-500 mt-2">Campo obligatorio</p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="dni" className="text-left text-mainColor text-sm">
              Número de identidad
            </label>
            <Input
              {...register("dni", { required: true })}
              id="dni"
              className={`!border !border-gray-300 bg-white text-gray-900 ${
                errors.dni ? "border-red-500" : ""
              }`}
              labelProps={{
                className: "hidden",
              }}
            />
            {errors.dni && (
              <p className="text-red-500 mt-2">Campo obligatorio</p>
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

export default StoreManager;
