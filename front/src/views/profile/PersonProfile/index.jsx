import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { CardProfile } from "../components/CardProfile";
import DialogPack from "../components/DialogPack";

const PersonProfile = ({ user }) => {
  const [openDialog, setOpenDialog] = useState(false);
 
  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };
  return (
    <div className="flex flex-col items-center h-screen w-full mb-10">
      <h1 className="text-sizeTitle font-bold mt-5">Mi perfil</h1>
      <CardProfile user={user} />
      <Button
        className="normal-case bg-colorPrimary rounded-full m-5"
        onClick={handleOpenDialog}
      >
        Ver actividad
      </Button>
      <DialogPack setOpen={setOpenDialog} open={openDialog} />
    </div>
  );
};

export default PersonProfile;
