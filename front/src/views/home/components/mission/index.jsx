import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "wouter";

const Mission = () => {
    return (
        <div>
            <h2 className="font-weightTitle text-mainColor leading-none text-sizeTitle mt-24 mb-10">
                <span className="block">Mensaje tipo ¡Salva</span>
                <span>alimentos y ahorra dinero!</span>
            </h2>
            <p className="font-weightText text-mainColor text-sizeText">
                Mensaje tipo Con Nombre de la App, ayudamos a reducir el desperdicio de
                alimentos conectando a usuarios con establecimientos que tienen
                excedentes del día.
            </p>
            <div className="flex justify-between my-8">
                <Link to="/auth/user/login">
                    <Button
                        className="rounded-full normal-case font-weightTextButton text-sizeTextButton bg-mainColor p-0 text-white w-widthMainBtn h-heightMainBtn"
                    >
                        Quiero salvar comida
                    </Button>
                </Link>
                <Link to="/auth/shop/login">

                    <Button
                        className="rounded-full normal-case p-0 bg-white text-sizeTextButton text-mainColor border border-mainColor w-widthMainBtn h-heightMainBtn"
                    >
                        Quiero vender comida
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Mission;
