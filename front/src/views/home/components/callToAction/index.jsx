import { Button } from "@material-tailwind/react";
import Modal from "./modal";
import footLoverPerson from "../../assets/footLoverPerson.png";
import businessPerson from "../../assets/businessPerson.png";
import ModalBusiness from "./modalBusiness";
import React, { useState } from "react";

const CallToAction = () => {
  const [size, setSize] = useState(null);
  const [size1, setSize1] = useState(null);

  const handleOpen = (value) => setSize(value);
  const handleOpen1 = (value) => setSize1(value);

  return (
    <div className="relative text-left w-full lg:px-[2rem] lg:mb-0"      id="how-works">
      <div
   
        className="bg-colorPrimary rounded-t-3xl h-[120px] px-[2rem] flex items-center"
      >
        <h2 className="text-colorNeutral3 leading-none  text-left text-sizeTitle font-weightTitle">
          ¿Quieres saber cómo funciona?
        </h2>
      </div>

      <div>
        <div className="lg:flex lg:w-10/12 lg:m-auto justify-center items-center">
          <img
            src={footLoverPerson}
            alt="imgFootLoverPerson"
            height={220}
            width={220}
            className="m-auto my-8"
          />
          <div className="px-[2rem] lg:flex flex-col gap-3">
            <h3 className="text-colorNeutral1 font-bold leading-none text-sizeSubtitle">
              ¿Eres un amante de la comida y el planeta?
            </h3>
            <Modal handleOpen={handleOpen} size={size} />

            <div>
              <p className="my-3 font-weightText text-sizeText leading-none text-colorNeutral1">
                Regístrate y compra alimentos a precios bajos. Explora locales y
                salva alimentos.
              </p>
            </div>
            <div className="">
              <Button
                className="rounded-full normal-case bg-colorNeutral3 border-2 border-colorPrimary  text-sizeTextButton font-weightTextButton w-[343px] h-[44px] text-colorPrimary"
                onClick={() => handleOpen("xl")}
              >
                Saber más
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:flex flex-row-reverse lg:w-10/12 lg:m-auto justify-center items-center">
          <img
            src={businessPerson}
            alt="imgBusinessPerson"
            height={220}
            width={220}
            className="m-auto my-8"
          />
          <div className="px-[2rem] lg:flex flex-col gap-3">
            <h3 className="text-colorNeutral1 font-bold leading-none text-sizeSubtitle">
              ¿Tienes un negocio y odias el desperdicio?
            </h3>
            <ModalBusiness handleOpen1={handleOpen1} size1={size1} />
            <p className="my-3 font-weightText text-sizeText leading-none text-colorNeutral1">
              Únete, transforma excedentes en ingresos. Atrae clientes y sé más
              sostenible.
            </p>
            <Button
              className="rounded-full normal-case bg-colorNeutral3 border-2 border-colorPrimary  text-sizeTextButton font-weightTextButton w-[343px] h-[44px] text-colorPrimary"
              onClick={() => handleOpen1("xl")}
            >
              Saber más
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
