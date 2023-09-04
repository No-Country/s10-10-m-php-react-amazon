import { Button } from "@material-tailwind/react";
import { Link } from "wouter";
import backgroundImg from "./assets/startpage-bg.png";

function SignUpStartPage({ setChoice }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <section
          className="w-full bg-black"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center text-white m-6">
            <h1 className="text-2xl font-bold p-8">Te damos la bienvenida a</h1>
            <h2 className="text-3xl font-normal">LISTO PARA LLEVAR</h2>
            <p className="italic mt-10">
              Regístrate, explora y compra fácilmente alimentos a precios
              reducidos. ¡Cada producto que salvas marca la diferencia!
            </p>
            <p className="font-bold m-5">
              ¡Cada producto que salvas marca la diferencia!
            </p>
          </div>
        </section>
        <section className="bg-colorPrimary w-full">
          <div className="flex flex-col items-center space-y-2 mt-10 mb-20">
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 bg-buttonFilledColor text-colorPrimary text-sm custom-google-button"
            >
              Registrarme con Google
            </Button>
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 bg-buttonFilledColor text-colorPrimary text-sm custom-facebook-button"
            >
              Registrarme con Facebook
            </Button>
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 bg-buttonFilledColor text-colorPrimary text-sm custom-mail-button"
              onClick={() => setChoice("email")}
            >
              Registrarme con correo
            </Button>
            <div className="flex text-white text-sm">
              <p className="mr-2">¿Ya tienes una cuenta?</p>
              <Link to="/auth/user/login">Inicia sesión acá</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignUpStartPage;
