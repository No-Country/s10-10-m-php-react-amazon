import { Button } from "@material-tailwind/react";
import { Link } from "wouter";
import backgroundImg from "./assets/startpage-bg.png";

function LoginStartPage({ setChoice }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly lg:h-screen lg:relative lg:bg-[#000000eb] ">
        <img
          src={backgroundImg}
          alt="backgroundImg"
          className="absolute w-full h-full "
        />
        <section className="relative h-[370px] lg:w-[700px] overflow-hidden bg-[#000000eb] lg:bg-transparent flex flex-col justify-center items-center lg:items-start">
          <img
            src={backgroundImg}
            alt="backgroundImg"
            className="absolute left-10 md:left-48 w-[541px] h-full lg:hidden"
          />
          <div className="text-center text-white   m-6 lg:m-0 lg:text-left">
            <div className="w-48 m-auto lg:w-full lg:m-0">
              <h1 className="text-2xl font-bold  leading-none lg:mb-8 mb-3">
                Te damos la bienvenida a
              </h1>
            </div>
            <div className="lg:h-10">
              <h2 className="text-3xl font-normal text-buttonFilledColor lg:text-6xl">
                LISTO PARA LLEVAR
              </h2>
            </div>
            <div className="lg:w-96">
              <p className="italic mt-10 lg:mb-4">
                Continúa rescatando alimentos y encontrando excelentes ofertas.
              </p>
            </div>
            <p className="font-bold m-5 lg:m-0">
              ¡Cada producto que salvas marca la diferencia!
            </p>
          </div>
        </section>
        <section className="bg-colorPrimary w-full h-96 flex flex-col lg:rounded-lg items-center justify-center z-10 lg:w-[450px] lg:h-[500px]">
          <div className="flex flex-col items-center gap-3 ">
            <Button
              variant="filled"
              className="rounded-full normal-case w-[340px] lg:w-[310px] bg-buttonFilledColor text-colorPrimary text-sm custom-google-button"
            >
              Continuar con Google
            </Button>
            <Button
              variant="filled"
              className="rounded-full normal-case w-[340px] lg:w-[310px] bg-buttonFilledColor text-colorPrimary text-sm custom-facebook-button"
            >
              Continuar con Facebook
            </Button>
            <Button
              variant="filled"
              className="rounded-full normal-case w-[340px] lg:w-[310px] bg-buttonFilledColor text-colorPrimary text-sm custom-mail-button"
              onClick={() => setChoice("email")}
            >
              Continuar con correo
            </Button>
            <div className="flex justify-between items-center my-10 lg:my-0 lg:mt-10 text-white text-sizeNote w-[320px]">
              <p className="mr-2">¿Aún no tienes cuenta?</p>
              <Link to="/auth/user/signup" className="font-bold">
                Regístrate
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LoginStartPage;
