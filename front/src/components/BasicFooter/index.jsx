import React from 'react';

const BasicFooter = () => {
    return (
        <div className='py-[24px] bg-colorNeutral3 flex flex-col justify-center items-center  border-t-4 border-colorPrimary'>
            <div className='text-sizeText w-8/12 flex justify-between text-colorNeutral1'>
                <span>Ayuda</span>
                <span>Privacidad</span>
                <span>Términos</span>
            </div>
            <div className='text-center py-2 text-mainColor'>
                <p>© 2023 ListoParaLlevar</p>
                <p>Todos los derechos reservados.</p>
            </div>
        </div>
    );
};

export default BasicFooter;