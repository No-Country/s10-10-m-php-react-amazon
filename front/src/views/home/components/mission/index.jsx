import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "wouter";
import iconStore from "../../../../assets/icons/bx_store.svg";
import iconPerson from "../../../../assets/icons/fluent_person.svg";
import { useSelector } from "react-redux";

const Mission = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="w-full lg:px-[2rem]">
      <h2 className="px-[2rem] lg:px-[0] font-weightTitle text-colorNeutral1 text-left leading-none text-sizeTitle my-8">
        Salva alimentos y ahorra dinero con nosotros
      </h2>
      <section className="bg-colorPrimary h-[290px] p-[2rem] flex flex-col justify-between text-center">
        <h3 className="text-sizeSubtitle text-colorNeutral3">
          Ayudamos a disminuir el desperdicio de alimentos
        </h3>

        <div className="flex m-auto w-80 justify-center items-center">
          <span className="bg-white rounded-full p-2">
            <img src={iconStore} color="white" alt="" />
          </span>
          <div className="w-16 h-0 border-2 border-colorNeutral3"></div>
          <span className="bg-white rounded-full p-2">
            <img src={iconPerson} alt="" />
          </span>
        </div>

        <p className="text-colorNeutral3 leading-none text-sizeText">
          Conectamos a <b>establecimientos que venden comida</b> con{" "}
          <b>clientes</b> interesados en comprar los excedentes del día.
        </p>
      </section>
      <div className="flex flex-col lg:flex-row lg:gap-10 justify-center items-center  gap-3 my-8">
        <Button className="rounded-full normal-case bg-colorPrimary p-0 w-[330px] h-[44px] ">
          {user.token ? (
            <Link to="/user/profile">Quiero salvar comida</Link>
          ) : (
            <Link to="/auth/user/signup">Quiero salvar comida</Link>
          )}
        </Button>
        <Button className="rounded-full h-[44px] w-[343px] normal-case p-0 bg-white text-sizeButtonCTAs text-colorPrimary border border-colorPrimary">
          {user.token ? (
            <Link to="/user/profile">Quiero vender comida</Link>
          ) : (
            <Link to="/auth/shop/signup">Quiero vender comida</Link>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Mission;
