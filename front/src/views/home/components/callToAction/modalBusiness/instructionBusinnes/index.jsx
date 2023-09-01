import React from 'react';

const InstructionBusiness = ({ number, img, paragraph }) => {
    return (
        <div className='flex '>
            <section className='text-left flex justify-between gap-6'>
                <div className='flex justify-between items-center w-24'>
                    <span className='text-colorPrimary text-[36px] font-extrabold '>{number}</span>
                    <img src={img} alt="" height={56} width={56} />
                </div>
                <div className='w-[208px]'>
                    <p className='text-sizeText'>
                        {paragraph}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default InstructionBusiness;