import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { BiTrash } from "react-icons/bi";
   import Logo from '../../../../../../assets/isotipo-lpl 1.png'
   
   const CardSelledPack = ({item}) => {

    const timeStartParts = item.pack.time_start.split(' ')[1].split(':'); 
const timeStart = `${timeStartParts[0]}:${timeStartParts[1]}`;

const timeEndParts = item.pack.time_end.split(' ')[1].split(':'); 
const timeEnd = `${timeEndParts[0]}:${timeEndParts[1]}`; 
    return (
      <Card className="mt-5 w-[350px] h-[200px]">
        <CardBody className=" grid grid-cols-12 w-full h-full p-4">
          <div className="col-span-4 h-full flex justify-center items-center">
            <img src={Logo} alt={"logo"} className=""/>
          </div>
          <div className="h-full border-r-2 w-0 border-gray col-span-1">
            
          </div>
          <div  className="col-span-7 h-full flex flex-col justify-between">
            <div className="flex justify-between">
            <h1 className="custom-text font-bold my-2">{item.pack.name}</h1>
            <BiTrash size={30}/>
            </div>
            <p className="custom-textButton"><span>Retirar de </span><span className="border-black rounded-md border-gray-200 border-2  p-1">{timeStart} - {timeEnd}</span></p>
            <div className="flex justify-between items-center">
                <h1 className="text-sizeSubtitle font-extrabold text-colorPrimary">$ {item.pack.price}</h1>
                <Button variant="outlined" className="rounded-full border-[#045162] text-[#045162] text-md font-extrabold py-2 px-3" color="teal">
                    Editar
                </Button>
            </div>
          </div>
        </CardBody>
       
      </Card>
    );
  }

  export default CardSelledPack