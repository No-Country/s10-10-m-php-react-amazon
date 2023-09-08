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

const Form = () => {
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
            <div className=" w-[343px] lg:w-[532px] p-[1rem] flex flex-col  justify-center  rounded-md bg-white">
              <div>
                <label
                  htmlFor="email"
                  className="text-left -mb-3 text-sizeLabel text-colorNeutral1"
                >
                  Correo electrónico
                </label>
                <Input
                  {...register("email", { required: true })}
                  id="email"
                  className="!border !border-gray-300 bg-white text-gray-900 "
                  labelProps={{
                    className: "hidden",
                  }}
                />
                {errors.email && (
                  <p className="text-red-500" style={{ fontSize: "14px" }}>
                    Campo obligatorio
                  </p>
                )}
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="text-left -mb-3 text-sizeLabel text-colorNeutral1"
                >
                  Contraseña
                </label>

                <div className="flex w-full relative">
                  <Input
                    type={isVisible ? "password" : "text"}
                    {...register("password", { required: true })}
                    id="password"
                    className="!border !border-gray-300 bg-white text-gray-900 "
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

              {invalid && (
                <p className="text-red-500" style={{ fontSize: "14px" }}>
                  Email y/o contraseña incorrectos
                </p>
              )}
            </div>
            <div className="text-center m-6">
              <Button
                className="rounded-full normal-case w-full bg-buttonFilledColor text-colorPrimary text-sm"
                type="submit"
              >
                Iniciar
              </Button>
            </div>
          </form>

          <div className="m-2 text-center custom-textButton">
            <Link to="/page-not-found">¿Olvidaste tu contraseña?</Link>
          </div>

          <div className="text-sizeNote text-secondColorTextForms w-[330px] my-8 flex justify-between">
            <span>¿Aún no tienes cuenta?</span>
            <Link to="/auth/user/signup">Regístrate</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
