import { Button, Input } from "@material-tailwind/react";
import UserLogo from "../../../../assets/user-profile.svg";
import { addPhoto, updateUser } from "../../../../api/userApi";
import { setPhoto, setUpdateUser } from "../../../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import { navigate } from "wouter/use-location";
import { BiArrowBack } from "react-icons/bi";

export default function EditProfile() {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const user = useSelector((state) => state.user);

  const handleBack = () => {
    history.back();
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    addPhoto(selectedFile, user.token).then((response) => {
      dispatch(setPhoto(response.message));
    });
  };

  const handleSaveChanges = () => {
    const updatedData = {
      email,
      name,
    };

    updateUser(user.id, updatedData, user.token)
      .then((response) => {
        dispatch(setUpdateUser(updatedData));
        toast.success("Se actualizaron los datos");
        navigate("/user/profile");
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
        toast.error("No se actualizaron los datos");
      });
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="flex items-center mt-5">
          <Button
            variant="outlined"
            onClick={handleBack}
            className="rounded-full p-3 flex justify-center border-2"
          >
            <BiArrowBack size={16} color="black" />
          </Button>
          <h1 className="ml-10 text-sizeTitle font-bold">Editar perfil</h1>
        </div>

        <div className="flex flex-row items-center mt-10">
          <div className="w-[100px] h-[100px]">
            {user.avatar ? (
              <img src={user.avatar} alt="avatar" className="rounded-full" />
            ) : (
              <img
                src={UserLogo}
                className="rounded-full w-[100px] h-[100px]"
                alt="default user logo"
              />
            )}
          </div>
          <div className="ml-4">
            <label
              htmlFor="fileInput"
              className="cursor-pointer text-colorPrimary font-weightTextButton"
            >
              Subir una foto
              <input
                id="fileInput"
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleFileSelect}
              />
            </label>
          </div>
        </div>

        <div className="flex w-72 flex-col gap-6 mt-5">
          <label
            htmlFor="email"
            className="text-left text-colorNeutral1 -mb-5 text-sizeLabel"
          >
            Correo electrónico
          </label>
          <Input
            placeholder={user.email}
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          <label
            htmlFor="name"
            className="text-left text-colorNeutral1 -mb-5 text-sizeLabel"
          >
            Nombre completo
          </label>
          <Input
            placeholder={user.name}
            id="name"
            type="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          <Button
            className="normal-case bg-colorPrimary rounded-full mt-5"
            onClick={handleSaveChanges}
          >
            Guardar cambios
          </Button>
          <Toaster richColors />
        </div>
      </div>
    </>
  );
}
