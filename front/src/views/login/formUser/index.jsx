import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <>
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
              {...register("email")}
              id="email"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              placeholder="Correo electrónico"
            />
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
              {...register("password")}
              id="password"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              placeholder="Contraseña"
            />
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
    </>
  );
};
export default Form;
