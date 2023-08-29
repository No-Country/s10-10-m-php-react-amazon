import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { navigate } from "wouter/use-location";
import { loginUser } from "../../../../../api/authApi";
import { setToken } from "../../../../../features/userSlice";
import { validatePassword } from "../../../../../utils/validatePassword";

function RecoverPass() {

    /*
    TODO - verificar que las contraseñas sean iguales
     */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const [invalid, setInvalid] = useState(false);

  const submit = (data) => {};

  return (
    <div className="flex flex-col items-center bg-mainColor h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="custom-title text-center">
          <p>Establece tu nueva contraseña</p>
        </div>
        <Typography className="custom-subtitle text-center p-5">
          Consejo de seguridad: opta por una combinación de letras, números y
          símbolos para hacer tu contraseña más fuerte.
        </Typography>
      </div>

      <div className="items-center h-screen">
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label
              htmlFor="password"
              className="text-left custom-label -mb-3"
              style={{ fontSize: "11px" }}
            >
              Ingresá nueva contraseña
            </label>
            <Input
              size="lg"
              {...register("password", { required: true })}
              id="password"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              placeholder="Ingresá nueva contraseña"
            />
            {errors.email && (
              <p className="text-red-500" style={{ fontSize: "14px" }}>
                Campo obligatorio
              </p>
            )}
            <label
              htmlFor="newPassword"
              className="text-left custom-label -mb-3"
              style={{ fontSize: "11px" }}
            >
              Confirmá la contraseña
            </label>
            <Input
              size="lg"
              type="newPassword"
              {...register("newPassword", { required: true })}
              id="newPassword"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              placeholder="Confirmá la contraseña"
            />
            {error && (
              <p className="text-red-500" style={{ fontSize: "14px" }}>
                {error}
              </p>
            )}
            {errors.password && (
              <p className="text-red-500" style={{ fontSize: "14px" }}>
                Campo obligatorio
              </p>
            )}
          </div>
          <div className="mt-3">
            <Checkbox
              className="rounded-full bg-white h-4 w-4"
              label={
                <Typography
                  variant="small"
                  className="custom-textButton"
                >
                  Recuérdame
                </Typography>
              }
            />
          </div>
          {invalid && (
            <p className="text-red-500" style={{ fontSize: "14px" }}>
              Email y/o contraseña incorrectos
            </p>
          )}

          <div className="mt-10 text-center">
            <Button className="rounded-full normal-case w-72 custom-buttonCTAs" type="submit">
              Establecer nueva contraseña
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecoverPass;
