import React from 'react';
import Instruction from './instruction';
import { Button, Dialog } from '@material-tailwind/react';
import iconProfile from '../../../assets/iconsModalUser/profile.svg'
import iconPack from "../../../assets/iconsModalUser/pack.png"
import iconPay from "../../../assets/iconsModalUser/pay.svg"
import iconTakeaway from "../../../assets/iconsModalUser/takeaway.svg"
import iconFoot from "../../../assets/iconsModalUser/food.svg"

const Modal = ({ open, handleOpen }) => {

    return (
        <Dialog open={open} handler={handleOpen}
            animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 }, }}
            className='h-[542px] w-[343px] z-10 drop-shadow-2xl bg-colorNeutral3 relative flex flex-col justify-center items-center gap-4 rounded-lg'>

            <div className='relative w-full'>
                <button className='absolute right-5  -top-4 text-2xl font-bold text-mainColor' onClick={() => handleOpen()}>
                    X
                </button>
            </div>
            <Instruction number={"1"} img={iconProfile} paragraph={<span>Crea una <b>cuenta</b> en la app y <b>completa tu perfil.</b></span>} />
            <Instruction number={"2"} img={iconPack} paragraph={<span>Explora y <b>elige tu pack</b> preferido. ¡Hay muchas opciones!</span>} />
            <Instruction number={"3"} img={iconPay} paragraph={<span>Realiza el <b>pago</b> de tu pack.</span>} />
            <Instruction number={"4"} img={iconTakeaway} paragraph={<span>Ve al local, muestra tu código y <b>recoge tu producto.</b></span>} />
            <Instruction number={"5"} img={iconFoot} paragraph={<span>¡<b>Disfruta</b> tus alimentos a un menor precio!</span>} />
            <div className=''>
                <Button className='rounded-lg normal-case bg-colorPrimary p-0 w-[330px] h-[44px] '>
                    Quiero salvar comida
                </Button>
            </div>
        </Dialog>
    );
};

export default Modal;