import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { CardProfile } from "../components/CardProfile";
import DialogPack from "../components/DialogPack";



const PersonProfile = ({ user }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <h1 className="text-sizeTitle font-bold mt-5">Mi perfil</h1>
      <CardProfile user={user} />
      <Button
          variant="gradient"
          className="rounded-full w-96"
          onClick={handleOpenDialog}
        >
          Ver actividad
        </Button>
        <DialogPack setOpen={setOpenDialog} open={openDialog} />
    </div>
  );
};

export default PersonProfile;
