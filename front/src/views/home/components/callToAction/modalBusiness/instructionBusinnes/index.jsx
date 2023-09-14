import React from 'react';

const InstructionBusiness = ({ number, img, paragraph }) => {
    return (
        <div className='flex'>
            <section className='text-left lg:text-center flex justify-between lg:flex-col gap-6'>
                <div className='flex justify-between items-center w-24 lg:m-auto'>
                    <span className='text-colorPrimary text-[36px] font-extrabold '>{number}</span>
                    <img src={img} alt="" height={56} width={56} />
                </div>
                <div className='w-[208px] lg:w-full lg:px-3'>
                    <p className='modalUser1 text-sizeText text-colorNeutral1 leading-tight'>
                        {paragraph}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default InstructionBusiness;