import { useForm } from "react-hook-form";

import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import { Link } from "wouter";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { validatePassword } from "../../../../../../utils/validatePassword";

const FormUser = ({ setData, data }) => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(true);


  const submit = (info) => {
    const passwordError = validatePassword(info.password);
    setError(passwordError)

    if (!passwordError) {
      const updatedData = {
        ...data,
        fullname: info.fullname,
        lastname: info.lastname,
        password: info.password,
        email: info.email,
      };
      setData(updatedData);
    }
  };



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
              htmlFor="fullname"
              className="text-left text-secondColorTextForms font-bold -mb-3"
              style={{ fontSize: "11px" }}
            >
              Nombre
            </label>
            <Input
              size="lg"
              {...register("fullname", { required: true })}
              id="fullname"
              className={`bg-white ${
                errors.fullname ? "border-red-500" : ""
              }`}
              placeholder="Nombre"
            />
            {errors.fullname && (
              <p className="text-red-500">Campo obligatorio</p> 
            )}
            <label
              htmlFor="lastname"
              className="text-left text-secondColorTextForms font-bold -mb-3"
              style={{ fontSize: "11px" }}
            >
              Apellido
            </label>
            <Input
              size="lg"
              {...register("lastname", { required: true })}
              id="lastname"
              className={`bg-white ${
                errors.lastname ? "border-red-500" : ""
              }`}
              placeholder="Apellido"
            />
            {errors.lastname && (
              <p className="text-red-500">Campo obligatorio</p> 
            )}
            <label
              htmlFor="email"
              className="text-left text-secondColorTextForms font-bold -mb-3"
              style={{ fontSize: "11px" }}
            >
              Email
            </label>
            <Input
              size="lg"
              {...register("email", { required: true })}
              id="email"
              className={`bg-white ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500">Campo obligatorio</p> 
            )}
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
                {...register("password", { required: true })}
                type={isVisible ? "password" : "text"}
                id="password"
                className={`bg-white ${
                  error || errors ? "border-red-500" : ""
                }`}
                placeholder="Contraseña"
              />
             
              <button
                className="absolute right-2 top-1/2 text-2xl text-mainColor"
                type="button"
                onClick={handleChangeVisible}
              >
                {isVisible ? <BsEye /> : <BsEyeSlash />}{" "}
              </button>
             
            </div>
            {error && (
                <p className="text-red-500">{error}</p>
              )}
               {errors.password && (
              <p className="text-red-500">Campo obligatorio</p> 
            )}
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
