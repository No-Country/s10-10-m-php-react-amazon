import { useForm } from "react-hook-form";
import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import { Link } from "wouter";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { validatePassword } from "../../../../../../utils/validatePassword";
import { signUpUser } from "../../../../../../api/authApi.js";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../../../features/userSlice";
const FormUser = ({ setData, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  const submit = (info) => {
    const passwordError = validatePassword(info.password);
    setError(passwordError);

    if (!passwordError) {
      const updatedData = {
        ...data,
        name: info.name,
        lastname: info.lastname,
        password: info.password,
        email: info.email,
      };
      console.log(updatedData)
      signUpUser(updatedData).then((response) => {
        if (response.status == 201) {
          console.log(response.data);
          dispatch(setUser(response.data));
        } else {
          setError("El email ya existe");
        }
      });
    }
  };

  const handleChangeVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center bg-colorPrimary min-h-screen">
      <h1 className="text-2xl font-bold p-3 text-white m-2">
        ¡Regístrate y marca la diferencia!
      </h1>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-3 bg-white p-5 m-2 rounded-lg">
          <div className="relative">
            <label htmlFor="name" className="text-left text-mainColor text-sm">
              Nombre
            </label>
            <Input
              {...register("name", { required: true })}
              id="name"
              className={`!border !border-gray-300 bg-white text-gray-900  ${errors.name ? "border-red-500" : ""
                }`}
              labelProps={{
                className: "hidden",
              }}
            />
            {errors.name && (
              <p className="text-red-500 mt-2">Campo obligatorio</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="lastname"
              className="text-left text-mainColor text-sm"
            >
              Apellido
            </label>
            <Input
              {...register("lastname", { required: true })}
              id="lastname"
              className={`!border !border-gray-300 bg-white text-gray-900  ${errors.lastname ? "border-red-500" : ""
                }`}
              labelProps={{
                className: "hidden",
              }}
            />
            {errors.lastname && (
              <p className="text-red-500 mt-2">Campo obligatorio</p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="email" className="text-left text-mainColor text-sm">
              Correo electrónico
            </label>
            <Input
              {...register("email", { required: true })}
              id="email"
              className={`!border !border-gray-300 bg-white text-gray-900 ${errors.email ? "border-red-500" : ""
                }`}
              labelProps={{
                className: "hidden",
              }}
            />
            {errors.email && (
              <p className="text-red-500 mt-2">
                Por favor, revisa tu correo electrónico.
              </p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="text-left text-mainColor text-sm"
            >
              Contraseña
            </label>
            <div className="flex w-full relative">
              <Input
                type={isVisible ? "password" : "text"}
                {...register("password", { required: true })}
                id="password"
                className={`!border !border-gray-300 bg-white text-gray-900 ${errors.password ? "border-red-500" : ""
                  } w-full pr-10`}
                labelProps={{
                  className: "hidden",
                }}
              />
              <button
                className="text-2xl text-mainColor absolute right-2 top-1/2 transform -translate-y-1/2"
                type="button"
                onClick={handleChangeVisible}
              >
                {isVisible ? <BsEyeSlash /> : <BsEye />}{" "}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 mt-2">
                La contraseña debe contener 6 dígitos.
              </p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="passwordRepeat"
              className="text-left text-mainColor text-sm"
            >
              Repetir contraseña
            </label>
            <div className="flex w-full relative">
              <Input
                {...register("passwordRepeat", { required: true })}
                type={isVisible ? "password" : "text"}
                id="passwordRepeat"
                className={"!border !border-gray-300 bg-white text-gray-900"}
                labelProps={{
                  className: "hidden",
                }}
              />
              <button
                className="text-2xl text-mainColor absolute right-2 top-1/2 transform -translate-y-1/2"
                type="button"
                onClick={handleChangeVisible}
              >
                {isVisible ? <BsEyeSlash /> : <BsEye />}{" "}
              </button>
            </div>
            {errors.passwordRepeat && (
              <p className="text-red-500 mt-2">
                Las contraseñas deben coincidir.
              </p>
            )}
          </div>
        </div>
        <div className="mt-3">
          <Checkbox
            className="rounded-full bg-white h-4 w-4 text-white"
            label={
              <Typography className="text-colorModal">
                Acepto los Términos y Políticas de privacidad
              </Typography>
            }
          />
        </div>
        <div className="m-5">
          <Button
            fullWidth
            className="rounded-full custom-buttonCTAs normal-case"
            type="submit"
          >
            Continuar
          </Button>
          <Typography
            variant="small"
            className="mt-6 flex justify-between custom-textButton  pb-8"
          >
            <span>¿Ya tienes cuenta?</span>
            <Link to="/auth/user/login">Inicia sesión acá</Link>
          </Typography>
        </div>
      </form>
    </div>
  );
};

export default FormUser;
