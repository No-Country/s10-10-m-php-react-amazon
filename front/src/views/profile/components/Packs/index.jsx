import { IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { PackForm } from "./PackForm";
const Packs = () => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
  return (
    <div>
      <h1 className="custom-text my-5">Happy pack</h1>
      <div className="flex items-center cursor-pointer" onClick={handleOpen}> 
          <FontAwesomeIcon icon={faPlus} className="text-[12px] mr-2" />
        <span className="custom-textButton ">Añadir Nuevo Pack</span>
      </div>
      <PackForm handleOpen={handleOpen} open={open}/>
      
    </div>
  );
};

export default Packs;
