import { Button } from "@material-tailwind/react";

function StartPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-[#52525B]">
        <div className="flex flex-col space-y-4 text-center">
          <p className="font-semibold text-2xl text-white mb-44 p-10">
            Mensaje tipo enhorabuena estás a un paso de salvar comida
          </p>

          <section className="mt-10">
            <div className="flex flex-col space-y-2 items-center">
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
                Registrate con mail
              </Button>
              <Button
                variant="text"
                className="rounded-full normal-case w-72"
                color="white"
              >
                ¿Ya tienes cuenta?
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default StartPage;
