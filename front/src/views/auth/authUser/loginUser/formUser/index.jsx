import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { navigate } from "wouter/use-location";
import { loginUser } from "../../../../../api/authApi";
import { setToken } from "../../../../../features/userSlice";
import { validatePassword } from "../../../../../utils/validatePassword";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [invalid, setInvalid] = useState(false)
  const submit = (data) => {
    const {email, password} = data
    const passwordError = validatePassword(password);
    setError(passwordError)
    if (!passwordError) {
      loginUser(email, password).then(response => {
        console.log(response)
        setInvalid(false)
        if (response.status == 200) {
          dispatch(setToken(response.data.token))
          navigate('/')
        }
      }).catch(err => {
        console.log(err)
        setInvalid(true)
      })
      
    }
  };

  return (
    <div className="flex flex-col items-center bg-mainColor h-screen">
      <div className="p-10 font-medium text-3xl mt-8 text-white">
        <p>¡Te damos la bienvenida de nuevo!</p>
        <div className="flex flex-col items-center h-screen">
          <form onSubmit={handleSubmit(submit)}>
            <div className="mt-15">
              <label
                htmlFor="email"
                className="text-left text-secondColorTextForms font-bold -mb-3"
                style={{ fontSize: "11px" }}
              >
                Correo electrónico
              </label>
              <Input
                size="lg"
                {...register("email", { required: true })}
                id="email"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                placeholder="Correo electrónico"
              />
              {errors.email && (
                <p className="text-red-500"  style={{ fontSize: '14px' }}>Campo obligatorio</p>
              )}
              <label
                htmlFor="password"
                className="text-left text-secondColorTextForms font-bold -mb-3"
                style={{ fontSize: "11px" }}
              >
                Contraseña
              </label>
              <Input
                size="lg"
                type="password"
                {...register("password", { required: true })}
                id="password"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                placeholder="Contraseña"
              />
              {error && (
                <p className="text-red-500"  style={{ fontSize: '14px' }}>{error}</p>
              )}
              {errors.password && (
                <p className="text-red-500" style={{ fontSize: '14px' }}>Campo obligatorio</p>
              )}
            </div>
            <div className="mt-3">
              <Checkbox
                className="rounded-full bg-white h-4 w-4"
                label={
                  <Typography
                    variant="small"
                    className="text-secondColorTextForms"
                  >
                    Recuérdame
                  </Typography>
                }
              />
            </div>
            {invalid && <p className="text-red-500"  style={{ fontSize: '14px' }}>Email y/o contraseña incorrectos</p>}

            <div className="mt-10 text-center">
              <Button className="rounded-full normal-case w-72" type="submit">
                Iniciá sesión
              </Button>

              <div className="text-secondColorTextForms mt-4 text-sm">
                <span>
                  <a href="#">¿Has olvidado la contraseña?</a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
