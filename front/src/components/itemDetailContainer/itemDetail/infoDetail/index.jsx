import { Link } from "wouter";
import iconGeo from "../../../../assets/icons/geo-alt.svg"
import Comments from "./comments";

const InfoDetail = ({ item }) => {

  return (
    <div className='pl-[1rem] flex flex-col justify-start items-start w-full'>
      <div className="w-full">
        <div className="flex justify-between items-center mb-3 font-bold ">
          <h3 className='text-colorNeutral1 text-sizeSubtitle'>Sobre {item.shop.name}</h3>
          <Link to="" className="text-sizeTextButton mr-3">Ver Perfil</Link>
        </div>

        <p className="text-sizeText font-weightSubtitle mb-3">
          Ubicación <Link to="" className="font-thin border-b border-black text-[13px]"> Avenida Costanera 83</Link>
        </p>
        <p>Teléfono <span className="text-[13px]">  358-5123456</span></p>

      </div>
      <div className="flex flex-col justify-start items-start my-6">
        <h3 className=' font-bold text-[#3F3F46] mb-3'>Comentarios y Valoraciones</h3>
        <Comments />
      </div>
    </div>
  );
};

export default InfoDetail;