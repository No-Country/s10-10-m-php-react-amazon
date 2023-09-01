import iconGeo from "../../../../assets/icons/geo-alt.svg"
import Comments from "./comments";

const InfoDetail = () => {
    return (
        <div className='p-[1rem]'>
            <div>
                <h3 className='text-[#3F3F46] font-bold text-[18px] mb-3'>Sobre Starbucks</h3>

                <div className="flex w-9/12">
                    <span className="iconGeo w-8"><img src={iconGeo} alt="iconGeo" /></span>
                    <p className='text-[12px] font-weightSubtitle text-black'>
                        Calle de Juan de Austria 29, 28010 Madrid, España
                    </p>
                </div>

                <button className='text-[#3F3F46] text-[11px] font-bold ml-6'>
                    Ver en el mapa
                </button>
            </div>
            <div className='mt-4'>
                <h4 className='text-[#3F3F46] text-sizeText font-bold leading-none mb-3'>
                    Contenido que podría contener tu pack
                </h4>
                <ul className='list-disc pl-4 text-[12px] font-weightSubtitle'>
                    <li>Pasteles y repostería</li>
                    <li>Sándwiches y wraps</li>
                    <li>Ensaladas</li>
                    <li>Yogures y bowls de frutas</li>
                    <li>Aperitivos</li>
                </ul>
            </div>
            <Comments />
        </div>
    );
};

export default InfoDetail;