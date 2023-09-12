import React, { useRef } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPencil,
  faBasketShopping,
  faCarrot,
  faBreadSlice,
} from "@fortawesome/free-solid-svg-icons";
import UserLogo from "../../../../assets/user-profile.svg";
import { Link } from "wouter";
import { BiPencil } from "react-icons/bi";
import { addPhoto } from "../../../../api/userApi";
import { useDispatch } from "react-redux";
import { setPhoto } from "../../../../features/userSlice";

export const CardProfile = ({ user }) => {

  const dispatch = useDispatch()
  let icon;
  if (user.category == "panaderia") {
    icon = { faBreadSlice };
  } else if (user.category == "supermercado") {
    icon = { faBasketShopping };
  } else if (user.category == "verduleria") {
    icon = { faCarrot };
  }
  const fileInputRef = useRef(null);

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    addPhoto(selectedFile, user.token).then((response) => {
      console.log(response)
      dispatch(setPhoto(response.message))
      
    })
   
  };
  return (
    <Card className="my-6 w-[333px] h-[514px]">
      <div className="mb-2 flex flex-col items-center justify-evenly h-full">
        <div className="mb-2 flex flex-col items-center justify-evenly h-full relative">
          <div className="w-[100px] h-[100px] relative rounded-full">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="avatar"
                className="object-contain w-full h-full rounded-full"
              />
            ) : (
              <img
                src={UserLogo}
                className="bg-mainColor rounded-full w-full h-full rounded-full"
                alt="default user logo"
              />
            )}
            <div className="absolute top-0 right-0 flex items-center rounded-full bg-white p-1 border-gray-200 border-2 cursor-pointer">
              <BiPencil size={25} />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileSelect}
              />
            </div>
          </div>
        </div>
        <div className="m-5 text-center">
          <h1 className="font-sizeText mb-3">{user.name}</h1>
          <p className="custom-textButton">
            {user.location.city}, {user.location.province}
          </p>
        </div>
        <div className="m-5 text-center">
          <p>{user.category}</p>
          <Link to="/user/profile/map">
            <p className="custom-filter underline decoration-solid cursor-pointer">
              {user.location.address
                ? user.location.address
                : "No tienes designada tu ubicación"}
            </p>
          </Link>
        </div>
        <Button variant="outlined" className="rounded-full">
          Editar perfil
        </Button>
      </div>
    </Card>
  );
};
