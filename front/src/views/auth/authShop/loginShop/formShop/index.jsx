import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import useToggleVisibility from "../../../../../utils/hooks/useToggleVisibility";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { navigate } from "wouter/use-location";
import { Link } from "wouter";
import { loginUser } from "../../../../../api/authApi";
import { setUser } from "../../../../../features/userSlice";
import { validatePassword } from "../../../../../utils/validatePassword";
import { BiArrowBack } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

export default function FormShop() {
  const [isVisible, handleVisible] = useToggleVisibility(true);

  const handleBack = () => {
    history.back();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const [invalid, setInvalid] = useState(false);

  const submit = (data) => {
    const { email, password } = data;
    const passwordError = validatePassword(password);
    setError(passwordError);
    if (!passwordError) {
      loginUser(email, password)
        .then((response) => {
          setInvalid(false);
          if (response.status == 200) {
            console.log(response.data);
            dispatch(setUser(response.data));
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          console.log(err);
          setInvalid(true);
        });
    }
  };

  return (
    <div className="bg-colorPrimary">
      <div className="flex  items-center text-left p-[2rem] text-[24px] font-bold text-colorNeutral3">
        <Button
          onClick={handleBack}
          className="rounded-full p-1 border-2 border-colorNeutral3 bg-colorPrimary mr-3"
        >
          <BiArrowBack size={16} color="text-colorNeutral3" />
        </Button>
        <h3>Inicia sesión</h3>
      </div>
      <div className="text-3xl  custom-title">
        <div className="flex flex-col items-center h-screen">
          <form onSubmit={handleSubmit(submit)}>
            <div className=" w-[343px] h-[292px] lg:w-[532px] p-[1rem] flex flex-col  justify-center  rounded-md bg-white">
              <div className="mt-15 lg:w-[320px] lg:m-auto flex flex-col">
                <div>
                  <label
                    htmlFor="email"
                    className="text-left text-colorNeutral1 -mb-3 text-sizeLabel"
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
                    <p className="text-red-500" style={{ fontSize: "10px" }}>
                      Campo obligatorio
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-left -mb-3 text-sizeLabel text-colorNeutral1"
                  >
                    Contraseña
                  </label>

                  <div className="relative">
                    <Input
                      size="lg"
                      type={isVisible ? "password" : "text"}
                      {...register("password", { required: true })}
                      id="password"
                      className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                      placeholder="Contraseña"
                    />
                    <button
                      className="text-2xl text-mainColor absolute right-2 top-1/2 transform -translate-y-1/2"
                      type="button"
                      onClick={handleVisible}
                    >
                      {isVisible ? <BsEye /> : <BsEyeSlash />}{" "}
                    </button>
                  </div>
                  {error && (
                    <p className="text-red-800" style={{ fontSize: "10px" }}>
                      {error}
                    </p>
                  )}
                  {errors.password && (
                    <p
                      className="text-red-800 leading-none"
                      style={{ fontSize: "10px" }}
                    >
                      Campo obligatorio
                    </p>
                  )}
                </div>

                <div className="mt-3">
                  <Checkbox
                    className="rounded-full bg-white h-4 w-4 p-0"
                    label={
                      <Typography
                        variant="small"
                        className="text-colorNeutral1 p-0"
                      >
                        Recordarme
                      </Typography>
                    }
                  />
                </div>
              </div>
              {invalid && (
                <p className="text-red-500" style={{ fontSize: "10px" }}>
                  Email y/o contraseña incorrectos
                </p>
              )}
            </div>
            <div className="m-6 custom-textButton">
              <Link to="/recover-pass">¿Has olvidado la contraseña?</Link>
            </div>
            <div className="text-center">
              <Button
                className="rounded-full normal-case w-[340px] text-colorPrimary bg-[#FFDBCC]"
                type="submit"
              >
                Iniciá sesión
              </Button>
            </div>
          </form>

          <div className="text-sizeNote w-[330px] my-16 flex justify-between">
            <span>¿Aún no tienes cuenta?</span>
            <Link to="/auth/user/signup">Regístrate</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
