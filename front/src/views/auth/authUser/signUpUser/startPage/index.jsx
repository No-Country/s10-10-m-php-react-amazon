import { Button, Typography } from "@material-tailwind/react";
import { Link } from "wouter";

function SignUpStartPage({ setChoice }) {
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-mainColor p-[2rem]">
        <div className="h-[114px] flex justify-center items-center">
          <h2 className="custom-title p-10 text-center">
            ¡Bienvenido a ListoParaLlevar!
          </h2>
        </div>
        <p className="text-center custom-subtitle">
          Regístrate, explora y compra fácilmente alimentos a precios reducidos.
          ¡Cada producto que salvas marca la diferencia!
        </p>
        <section className="mt-64">
          <div className="flex flex-col space-y-2">
            <Button
              variant="filled"
              className="rounded-full normal-case w-72  custom-buttonCTAs "
            >
              Registrate con Google
            </Button>
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 custom-buttonCTAs"
            >
              Registrate con Facebook
            </Button>
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 custom-buttonCTAs"
              onClick={() => setChoice("email")}
            >
              Registrate con mail
            </Button>
            <Typography
              variant="small"
              className="mt-6 flex justify-between custom-textButton pb-8"
            >
              <span>¿Ya tienes cuenta?</span>

              <Link to="/auth/user/login" >Inicia sesión acá</Link>
            </Typography>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignUpStartPage;
