import React from 'react';
import InstructionBusiness from './instructionBusinnes';
import iconProfile from "../../../assets/iconsModalUser/profile.svg"
import { Button, Dialog } from '@material-tailwind/react';
import iconPacks from "../../../assets/iconsModalBusiness/addpacks.svg"
import iconComplete from "../../../assets/iconsModalBusiness/complete.svg"
import iconCommerce from "../../../assets/iconsModalBusiness/commerce.svg"


const ModalBusiness = ({ isVisible2, toggleVisibility2 }) => {

    return (
        <Dialog open={isVisible2} handler={toggleVisibility2}
            animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 }, }}
            className='h-[470px] w-[343px] z-10 drop-shadow-2xl bg-colorNeutral3 relative flex flex-col justify-center items-center gap-4 rounded-lg'>
            <div className='relative w-full'>
                <button className='absolute right-4 -top-4 text-2xl font-bold text-mainColor ' onClick={() => toggleVisibility2()}>
                    X
                </button>
            </div>
            <InstructionBusiness number={"1"} img={iconProfile} paragraph={<span>Crea una <b>cuenta</b> en la app y <b>completa tu negocio.</b></span>} />
            <InstructionBusiness number={"2"} img={iconPacks} paragraph={<span>Ingresa la <b>cantidad de packs</b> que deseas vender.</span>} />
            <InstructionBusiness number={"3"} img={iconComplete} paragraph={<span>Carga el <b>precio, horario</b> de recogida, <b>foto</b>, etc. de los packs.</span>} />
            <InstructionBusiness number={"4"} img={iconCommerce} paragraph={<span>¡Los clientes ya <b>pueden visualizar los packs disponibles</b> en tu local!</span>} />
            <div className=''>
                <Button className='rounded-lg normal-case bg-colorPrimary p-0 w-[330px] h-[44px] '>
                    Quiero vender comida
                </Button>
            </div>
        </Dialog>
    );
};

export default ModalBusiness;