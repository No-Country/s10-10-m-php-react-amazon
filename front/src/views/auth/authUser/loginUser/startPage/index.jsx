import { Button, Typography } from "@material-tailwind/react";
import { Link } from "wouter";

function LoginStartPage({ setChoice }) {
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-mainColor">
        <div className="h-[114px] flex justify-center items-center">
          <h2 className="custom-title p-10 text-center">
            ¡Bienvenido a ListoParaLlevar!
          </h2>
        </div>
        <p className="text-center custom-subtitle">
          Continúa descubriendo ofertas increíbles y rescatando deliciosos
          productos a precios reducidos. ¡A disfrutar!
        </p>
        <section className="mt-72">
          <div className="flex flex-col space-y-2">
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 custom-buttonCTAs "
            >
              Continúa con Google
            </Button>
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 custom-buttonCTAs"
            >
              Continúa con Facebook
            </Button>
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 custom-buttonCTAs"
              onClick={() => setChoice("email")}
            >
              Continúa con mail
            </Button>
            <Typography className="flex justify-between custom-textButton text-xs">
              <span>¿No tenés una cuenta?</span>
              <Link to="/auth/user/signup">Regístrate acá</Link>
            </Typography>
          </div>
        </section>
      </div>
    </>
  );
}

export default LoginStartPage;
