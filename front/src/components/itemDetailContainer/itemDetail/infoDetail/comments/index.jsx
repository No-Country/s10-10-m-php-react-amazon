import React from 'react';
import starYellow from "../../../../../assets/icons/starYellow.svg"
import { Carousel } from '@material-tailwind/react';

const Comments = () => {
    return (
        <div className='my-6'>
            <h3 className='text-[18px] font-bold text-[#3F3F46] mb-3'>Comentarios y Valoraciones</h3>
            <div className='w-[249px] h-[113px]  text-colorFooter p-[1rem] rounded-sm shadow-md shadow-blue-gray-200'>
                <div className='flex '>
                    <img src={starYellow} alt="starYellow" />
                    <img src={starYellow} alt="starYellow" />
                    <img src={starYellow} alt="starYellow" />
                    <img src={starYellow} alt="starYellow" />
                    <img src={starYellow} alt="starYellow" />
                    <span className='ml-2 text-[14px]'>COO Dribbble</span>
                </div>
                <p className='text-[12px]'>
                    "The pessimist complains about the
                    wind; the optimist expects it to
                    change; the realist adjusts the sails."
                </p>
            </div>
        </div>
    );
};

export default Comments;