import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { BiTrash } from "react-icons/bi";
import Logo from '../../../../../../assets/isotipo-lpl 1.png'

const CardActivePack = ({ item }) => {
  console.log(item);

  const timeStartParts = item.time_start.split(' ')[1].split(':');
  const timeStart = `${timeStartParts[0]}:${timeStartParts[1]}`;

  const timeEndParts = item.time_end.split(' ')[1].split(':');
  const timeEnd = `${timeEndParts[0]}:${timeEndParts[1]}`;
  return (
    <Card className="mt-5 w-[350px] lg:w-full h-[180px]">
      <CardBody className=" flex items-center w-full h-full p-4">


        <div className="h-full flex justify-center w-[90px] items-center relative px-3">
          <img src={Logo} alt="bagPurchases" />
          <span className="absolute bottom-10" id="purchaseX">
            x{item.stock}
          </span>
          <span className="absolute bottom-10 z-10" id="purchaseX2">
            x{item.stock}
          </span>
        </div>


        <div className="col-span-7 h-full w-full flex flex-col justify-between">

          <div className="flex justify-between">
            <h1 className="custom-text font-bold my-2">{item.name}</h1>
            <BiTrash size={30} />
          </div>

          <div className="flex justify-between items-center">
            <p className="custom-textButton"><span>Retirar de </span></p>
            <span className="border-2 border-colorNeutral2 text-[12px] px-2 rounded-md text-black rounded-m">{timeStart} - {timeEnd}</span>
          </div>

          <div className="flex justify-between items-center">
            <h1 className="text-sizeSubtitle font-extrabold text-colorPrimary">${item.price}</h1>
            <Button variant="outlined" className="rounded-full normal-case border-[#045162] text-[#045162] text-md font-extrabold py-2 px-3" color="teal">
              Editar
            </Button>
          </div>

        </div>

      </CardBody>

    </Card>
  );
}

export default CardActivePack