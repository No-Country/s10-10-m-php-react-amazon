import { Button } from '@material-tailwind/react';
import { BiArrowBack } from "react-icons/bi";
import CardPurchases from './cardPurchases';


const Purchases = () => {

    const handleBack = () => {
        history.back();
    };

    return (
        <div className='h-screen p-[1rem]'>
            <div className=' w-full h-full'>

                <div className="flex  items-center text-left mb-[2rem]  text-[24px] font-bold text-colorNeutral1">
                    <Button
                        onClick={handleBack}
                        className="rounded-full p-1 border-2 border-colorNeutral1 bg-colorNeutral mr-3"
                    >
                        <BiArrowBack size={16} className="text-colorNeutral1" />
                    </Button>
                    <h3>Historial de Compras</h3>
                </div>

                <div className='flex flex-col h-[85vh] gap-6 overflow-y-auto min-w-[350px] snap-y w-full'>
                    <CardPurchases />
                    <CardPurchases />
                    <CardPurchases />
                    <CardPurchases />
                </div>

            </div>
        </div>
    );
};

export default Purchases;