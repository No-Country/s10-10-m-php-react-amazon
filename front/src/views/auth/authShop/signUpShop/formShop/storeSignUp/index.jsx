import { useForm } from "react-hook-form";
import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { validatePassword } from "../../../../../../utils/validatePassword";
import { signUpShop } from "../../../../../../api/authApi.js";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "sonner";
import { setToken } from "../../../../../../features/userSlice.js";
import useToggleVisibility from "../../../../../../utils/hooks/useToggleVisibility";

const StoreSignUp = ({ name, category }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const [isVisible, handleVisible] = useToggleVisibility(true);
  const dispatch = useDispatch();

  const [passwordMatchError, setPasswordMatchError] = useState("");
  const handlePasswordRepeatChange = (event) => {
    const password = document.getElementById("password").value;
    const passwordRepeat = event.target.value;

    if (password !== passwordRepeat) {
      setPasswordMatchError("Las contraseñas no coinciden");
    } else {
      setPasswordMatchError("");
    }
  };

  const submit = (info) => {
    const passwordError = validatePassword(info.password);
    setError(passwordError);
    if (!passwordError) {
      const updatedData = {
        type: "business",
        description: "algo",
        name: name,
        category: category,
        email: info.email,
        password: info.password,
      };
      signUpShop(updatedData)
        .then((response) => {
          if (response.status == 201) {
            toast("Registro con éxito");
            dispatch(setToken(response.data));
          }
        })
        .catch((err) => {
          console.log(err);
          toast("Email existente");
        });
    }
  };

  return (
    <div className="flex flex-col items-center bg-colorPrimary min-h-screen">
      <h1 className="text-2xl font-bold p-3 text-white m-2">
        Únete y transforma excedentes en ingresos
      </h1>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-3 bg-white p-5 m-2 rounded-lg">
          <div className="relative">
            <label htmlFor="email" className="text-left text-mainColor text-sm">
              Correo electrónico
            </label>
            <Input
              {...register("email", { required: true })}
              id="email"
              className={`!border !border-gray-300 bg-white text-gray-900 ${
                errors.email ? "border-red-500" : ""
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
                className={`!border !border-gray-300 bg-white text-gray-900 ${
                  errors.password ? "border-red-500" : ""
                } w-full pr-10`}
                labelProps={{
                  className: "hidden",
                }}
              />
              <button
                className="text-2xl text-mainColor absolute right-2 top-1/2 transform -translate-y-1/2"
                type="button"
                onClick={handleVisible}
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
                onChange={handlePasswordRepeatChange}
              />
              <button
                className="text-2xl text-mainColor absolute right-2 top-1/2 transform -translate-y-1/2"
                type="button"
                onClick={handleVisible}
              >
                {isVisible ? <BsEyeSlash /> : <BsEye />}{" "}
              </button>
            </div>
            {passwordMatchError && (
              <p className="text-red-500 mt-2">{passwordMatchError}</p>
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
            Registrarme
          </Button>
        </div>
      </form>
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default StoreSignUp;