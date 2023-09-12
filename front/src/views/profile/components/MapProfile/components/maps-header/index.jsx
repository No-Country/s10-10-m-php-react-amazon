import { Button } from "@material-tailwind/react";
import { BiArrowBack } from "react-icons/bi";



const MapsHeader = () => {

  const handleBack = () => {
    history.back();
  };
  return (
    <div className="flex">
       <Button
          onClick={handleBack}
          className="rounded-full p-1 border-2 border-colorNeutral1 bg-colorNeutral3 mr-3"
        >
          <BiArrowBack size={16} color="black" />
        </Button>
        <h3 className='text-sizeSubtitle'>Selecciona la ubicación</h3>
    </div>
  )
}

export default MapsHeader
