import { useForm } from "react-hook-form";

import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import { Link } from "wouter";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const FormUser = ({ setData, data }) => {
  const { register, handleSubmit } = useForm();

  const submit = (info) => {
    const updatedData = {
      ...data,
      fullname: info.name,
      password: info.password,
      email: info.email
    };
    setData(updatedData);
  };

  const [isVisible, setIsVisible] = useState(true);

  const handleChangeVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center bg-mainColor h-screen">
      <div className="w-48 leading-tight font-bold mt-8 text-white text-center">
        <p> ¡Regístrate, compra a precios bajos y marca la diferencia!</p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(submit)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-4">
            <label
              htmlFor="name"
              className="text-left text-secondColorTextForms font-bold -mb-3"
              style={{ fontSize: "11px" }}
            >
              Nombre completo
            </label>
            <Input
              size="lg"
              {...register("name")}
              id="name"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              placeholder="Nombre"
            />
            <label
              htmlFor="email"
              className="text-left text-secondColorTextForms font-bold -mb-3"
              style={{ fontSize: "11px" }}
            >
              Email
            </label>
            <Input
              size="lg"
              {...register("email")}
              id="email"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              placeholder="Email"
            />
            <div className="relative">
              <label
                htmlFor="password"
                className="text-left text-secondColorTextForms font-bold -mb-3"
                style={{ fontSize: "11px" }}
              >
                Contraseña
              </label>
              <Input
                size="lg"
                {...register("password")}
                type={isVisible ? "password" : "text"}
                id="password"
                placeholder="Contraseña"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
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
            <Button
              variant="gradient"
              fullWidth
              className="rounded-full"
              type="submit"
            >
              Continuar
            </Button>
            <Typography
              variant="small"
              className="mt-6 flex justify-between text-secondColorTextForms pb-8"
            >
              <span>¿Ya tienes cuenta?</span>
              <span className="border-b-2 border-secondColorTextForms ">
                <Link to="/auth/user/login">Inicia sesión acá</Link>
              </span>
            </Typography>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUser;
