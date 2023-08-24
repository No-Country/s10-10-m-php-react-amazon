import { Button, Typography } from "@material-tailwind/react";
import { Link } from "wouter";

function StartPage() {
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-[#52525B] p-[2rem]">
        <div className="h-[114px] flex justify-center items-center">
          <h2 className="text-customSizeTitle text-white  font-bold p-10 text-center">
            ¡Bienvenido a ListoParaLlevar!
          </h2>
        </div>
        <p className="text-center text-white font-semibold">
          Regístrate, explora y compra fácilmente alimentos a precios reducidos.
          ¡Cada producto que salvas marca la diferencia!
        </p>
        <section className="mt-48">
          <div className="flex flex-col space-y-2">
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 text-white"
            >
              Registrate con Google
            </Button>
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 text-white"
            >
              Registrate con Facebook
            </Button>
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 text-white"
            >
              <Link to="/signup">Registrate con mail</Link>
            </Button>
            <Typography variant="small" className="mt-6 flex justify-between text-secondColorTextForms pb-8">
              <span>¿Ya tienes cuenta?</span>
              <span className="border-b-2 border-secondColorTextForms "><a href="/login">Inicia sesión acá</a></span>
            </Typography>
          </div>
        </section>
      </div>
    </>
  );
}

export default StartPage;
