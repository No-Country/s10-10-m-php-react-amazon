import { Button, Input } from "@material-tailwind/react";
import UserLogo from "../../../../assets/user-profile.svg";
import { addPhoto } from "../../../../api/userApi";
import { setPhoto } from "../../../../features/userSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

export default function EditProfile({ user, open, handleOpen }) {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    addPhoto(selectedFile, user.token).then((response) => {
      console.log(response);
      dispatch(setPhoto(response.message));
    });
  };

  return (
    <>
      <div className="flex flex-row items-center mt-10">
        <div className="w-[100px] h-[100px]">
          {user.avatar ? (
            <img src={user.avatar} alt="avatar" className="rounded-full" />
          ) : (
            <img
              src={UserLogo}
              className="bg-mainColor rounded-full"
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
          id="email"
          type="email"
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
          id="name"
          type="email"
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
          Selecciona tu ubicación
        </label>
        <Input
          id="address"
          type="email"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <Button className="normal-case bg-colorPrimary rounded-full mt-10">
          Guardar cambios
        </Button>
      </div>
    </>
  );
}
