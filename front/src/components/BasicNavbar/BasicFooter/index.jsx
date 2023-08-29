import React from 'react';

const BasicFooter = () => {
    return (
        <div className='py-[24px] bg-colorFooter text-colorNeutral3 flex flex-col justify-center items-center'>
            <div className='text-sizeText w-8/12 flex justify-between'>
                <span>Ayuda</span>
                <span>Privacidad</span>
                <span>Términos</span>
            </div>
            <div className='text-center py-2'>
                <p>© 2023 Nombre de la app</p>
                <p>Todos los derechos reservados.</p>
            </div>
        </div>
    );
};

export default BasicFooter;