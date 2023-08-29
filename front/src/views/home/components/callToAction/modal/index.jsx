import React from 'react';
import Instruction from './components/instruction';
import InstructionReverse from './components/instructionReverse';
import { Button } from '@material-tailwind/react';

const Modal = ({ isVisible, handleVisible }) => {
    return (
        <div className={`${isVisible ? "hidden" : "block"} h-[684px] w-[342px] z-10 bg-colorModal rounded-lg absolute top-58 right-1/2 translate-x-1/2 py-8 px-3`}>
            <div className='relative w-full'>
                <button className='absolute right-2 font-bold text-mainColor -top-5' onClick={() => handleVisible()}>
                    X
                </button>
            </div>
            <Instruction number={"1"} paragraph={" Crea tu perfil en un clic. Explora los establecimientos cercanos y descubre ofertas diarias."} />
            <InstructionReverse number={"2"} paragraph={"Reserva lo que te guste. Desde comidas hasta productos frescos, ¡hay algo para todos!"} />
            <Instruction number={"3"} paragraph={" Dirígete al establecimiento en el horario indicado, muestra tu reserva y recoge tus productos."} />
            <InstructionReverse number={"4"} paragraph={" ¡Disfruta de alimentos de calidad a una fracción de su precio original!"} />
            <div className='mt-10'>
                <Button className='rounded-full normal-case bg-mainColor p-0 text-white w-widthMainBtn h-heightMainBtn' style={{ fontSize: "12px" }}>
                    Quiero salvar comida
                </Button>
            </div>
        </div>
    );
};

export default Modal;