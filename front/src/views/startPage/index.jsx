import { Button } from "@material-tailwind/react";
import { Link } from "wouter";

function StartPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-[#52525B]">
        <p className="font-semibold text-2xl text-white p-10 text-center">
          Mensaje tipo enhorabuena estás a un paso de salvar comida
        </p>
        <section className="mt-40">
          <div className="flex flex-col space-y-2">
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 text-[#52525B]"
              color="white"
            >
              Registrate con Google
            </Button>
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 text-[#52525B]"
              color="white"
            >
              Registrate con Facebook
            </Button>
            <Button
              variant="filled"
              className="rounded-full normal-case w-72 text-[#52525B]"
              color="white"
            >
              <Link to="/signup">Registrate con mail</Link>
            </Button>
            <Button
              variant="text"
              className="rounded-full normal-case w-72"
              color="white"
            >
              <Link to="/login">¿Ya tienes cuenta?</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

export default StartPage;
