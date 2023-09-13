import React, { useEffect, useState } from 'react';
import bagPurchases from '../../home/assets/bagCardPurchases.png'
import { Button } from '@material-tailwind/react';
import { RiDeleteBinLine } from 'react-icons/ri';
import ModalDeletePurchases from './modalDeletePurchases';
import { useSelector } from 'react-redux';
import { getPurchases } from '../../../api/authApi';

const CardPurchases = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const user = useSelector((state) => state.user);
    const [purchases, setPurchases] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    console.log(purchases);


    useEffect(() => {
        setIsLoading(true);
        getPurchases(user.token)
            .then((response) => {
                setPurchases(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, []);

    return (
        <div className='border-2 border-colorNeutral2 h-[192px] lg:w-[950px]  w-full rounded-xl flex m-0 lg:m-auto'>

            <section className='h-full'>
                <div className='h-full flex justify-center w-[90px] items-center relative'>
                    <img src={bagPurchases} alt="bagPurchases" />
                    <span className='absolute bottom-14' id='purchaseX'>
                        x{5}
                    </span>
                    <span className='absolute bottom-14 z-10' id='purchaseX2'>
                        x{5}
                    </span>
                </div>
            </section>

            <section className='w-full h-[192px] flex items-center'>
                <div className='h-[168px] border-r-2 border-colorNeutral2  '></div>

                <div className='h-full p-[1rem] pr-[2rem] w-full flex flex-col justify-between'>
                    <div className='w-full flex justify-between'>
                        <span >10/09/23</span>
                        <button className='mr-2 text-sizeTitle' onClick={handleOpen}>
                            <RiDeleteBinLine />
                        </button>
                    </div>
                    <span className='font-bold text-sizeText text-colorNeutral1'>Goloso</span>

                    <div className='flex justify-between items-center'>
                        <span>Recogida</span>
                        <div className="border-[2px] border-colorNeutral2 px-2 py-[2px] w-32 rounded-md ml-8 text-sizeNote">
                            <span> 08:30 - 09:30</span>
                        </div>
                    </div>

                    <div className='flex justify-between items-center'>
                        <span className='font-bold text-colorPrimary text-sizeSubtitle'>$200</span>
                        <Button className=' h-[44px] normal-case border-2 font-bold border-colorPrimary bg-colorNeutral3 text-colorPrimary rounded-full'>
                            Ver Detalle
                        </Button>
                    </div>

                    <ModalDeletePurchases handleOpen={handleOpen} open={open} />

                </div>
            </section >

        </div >
    );

};

export default CardPurchases;