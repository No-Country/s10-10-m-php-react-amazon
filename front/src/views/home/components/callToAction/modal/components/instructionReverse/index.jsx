import React from 'react';

const InstructionReverse = ({ number, paragraph }) => {
    return (
        <div className='flex flex-row-reverse justify-between items-center '>
            <section className='w-[134px] h-[134px]'>
                <h2 className='text-customSizeTitle text-mainColor'>
                    {number}
                </h2>
                <p className='text-[14px] leading-none text-mainColor' >
                    {paragraph}
                </p>
            </section>
            <section className='w-[134px] h-[134px] bg-white rounded-full' >
            </section>
        </div>
    );
};

export default InstructionReverse;