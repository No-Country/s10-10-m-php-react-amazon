import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { CardProfile } from "../components/CardProfile";
import DialogPack from "../components/DialogPack";
import { PackForm } from "../components/PackForm";

const BusinessProfile = ({ user }) => {
  const [openForm, setOpenForm] = useState(false);
  const [openDialog, setOpenDialog] = useState(false)
  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog)
  }
  if (!openForm)
  return (
    <div>
      <div className="flex justify-between w-full">
        <h1>Mi Pefil</h1>
        <Button
          variant="gradient"
          className="rounded-full"
          onClick={handleOpenForm}
        >
          Añadir Pack
        </Button>
      </div>
      <CardProfile user={user} />
      
      <Button variant="gradient" className="rounded-full w-full" onClick={handleOpenDialog} >Ver actividad</Button>
      <DialogPack setOpen={setOpenDialog} open={openDialog}/>
    </div>
  );
  else return (<PackForm handleOpen={handleOpenForm} open={openForm} />)
};

export default BusinessProfile;
