import React from "react";
import InstructionBusiness from "./instructionBusinnes";
import iconProfile from "../../../assets/iconsModalUser/profile.svg";
import { Button, Dialog } from "@material-tailwind/react";
import iconPacks from "../../../assets/iconsModalBusiness/addpacks.svg";
import iconComplete from "../../../assets/iconsModalBusiness/complete.svg";
import iconCommerce from "../../../assets/iconsModalBusiness/commerce.svg";
import { Link } from "wouter";
import { useSelector } from "react-redux";

const ModalBusiness = ({ size1, handleOpen1 }) => {
  const user = useSelector((state) => state.user);

  return (
    <Dialog
      open={size1 === "xl"}
      size={size1 || "md"}
      handler={handleOpen1}
      animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 } }}
      className="h-[470px] lg:h-[344px]  w-[343px] z-10 drop-shadow-2xl bg-colorNeutral3 relative flex flex-col lg:flex-row justify-center lg:py-10 lg:px-3 items-center lg:items-start gap-4 lg:gap-5 rounded-lg"
    >
      <button
        className="absolute right-5 top-4 text-2xl font-bold text-mainColor"
        onClick={() => handleOpen1(null)}
      >
        X
      </button>

      <InstructionBusiness
        number={"1"}
        img={iconProfile}
        paragraph={
          <span>
            Crea una <b>cuenta</b> en la app y <b>completa tu negocio.</b>
          </span>
        }
      />
      <InstructionBusiness
        number={"2"}
        img={iconPacks}
        paragraph={
          <span>
            Ingresa la <b>cantidad de packs</b> que deseas vender.
          </span>
        }
      />
      <InstructionBusiness
        number={"3"}
        img={iconComplete}
        paragraph={
          <span>
            Carga el <b>precio, horario</b> de recogida, <b>foto</b>, etc. de
            los packs.
          </span>
        }
      />
      <InstructionBusiness
        number={"4"}
        img={iconCommerce}
        paragraph={
          <span>
            ¡Los clientes ya <b>pueden visualizar los packs disponibles</b> en
            tu local!
          </span>
        }
      />
      <div className="lg:absolute  bottom-8">
        <Button className="rounded-full normal-case bg-colorPrimary p-0 w-[330px] h-[44px] ">
          {user.token ? (
            <Link to="/user/profile">Quiero vender comida</Link>
          ) : (
            <Link to="/auth/shop/signup">Quiero vender comida</Link>
          )}
        </Button>
      </div>
    </Dialog>
  );
};

export default ModalBusiness;
