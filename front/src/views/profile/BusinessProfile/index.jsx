import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { CardProfile } from "../components/CardProfile";
import DialogPack from "../components/DialogPack";
import { PackForm } from "../components/PackForm";

const BusinessProfile = ({ user }) => {
  const [openForm, setOpenForm] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };
  if (!openForm)
    return (
      <div className="flex flex-col items-center h-screen w-full mb-10">
        <h1 className="text-sizeTitle font-bold mt-5">Mi perfil</h1>
        <div>
          <Button
            className="normal-case bg-colorPrimary rounded-full m-2"
            onClick={handleOpenForm}
          >
            Añadir Pack
          </Button>
          <Button
            className="normal-case bg-colorPrimary rounded-full m-2"
            onClick={handleOpenDialog}
          >
            Ver actividad
          </Button>
        </div>
        <CardProfile user={user} />
        <DialogPack setOpen={setOpenDialog} open={openDialog} />
      </div>
    );
  else return <PackForm handleOpen={handleOpenForm} open={openForm} />;
};

export default BusinessProfile;
