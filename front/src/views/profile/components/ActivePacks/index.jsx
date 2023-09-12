import { Button } from "@material-tailwind/react";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

import ActivePacksListContainer from "./components/ActivePacksListContainer";

const ActivePacks = () => {


  const handleBack = () => {
    history.back();
  };

  return (
    <div className="flex flex-col p-5 items-center justify-center">
      <div className="flex w-full justify-center items-center">
        <Button
        variant="outlined"
          onClick={handleBack}
          className="rounded-full p-3 flex justify-center border-2 "
        >
          <BiArrowBack size={16} color="black" />
        </Button>
        <h3 className="text-sizeTitle ml-3">Packs Activos</h3>
      </div>
      <div className="bg-colorNeutral3 rounded-lg ">
        <ActivePacksListContainer/>
      </div>
    </div>
  );
};

export default ActivePacks;
