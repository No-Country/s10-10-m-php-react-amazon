import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPencil, faBasketShopping, faCarrot, faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import UserLogo from '../../../../assets/user-profile.svg'

export const CardProfile = ({user}) => {

    let icon;
    if (user.category == "panaderia") {
        icon = {faBreadSlice}
    } else if (user.category == "supermercado") {
        icon = {faBasketShopping}
    } else if (user.category == "verduleria") {
        icon = {faCarrot}
    }

  return (
    <Card className="my-6 w-[333px] h-[514px]">
        <Typography variant="h5" color="blue-gray" className="mb-2 flex flex-col items-center justify-evenly h-full">
          {user.avatar ? <img src={user.avatar} alt="avatar" className="object-contain w-[100px] h-[100px]"/> : <img src={UserLogo} className="bg-mainColor rounded-full w-[100px] h-[100px] fit-contain"></img>}
            <div className="m-5 text-center">
              <h1 className="font-sizeText mb-3">{user.name}</h1>
              <p className="custom-textButton">{user.location.city}, {user.location.province}</p>
              </div>
              <div className="m-5 text-center">
              <p>{user.category}</p>
              <p className="custom-filter underline decoration-solid">{user.location.address ? user.location.address : "No tienes designada tu ubicación"}</p>
              </div>
              <Button variant="outlined" className="rounded-full">Editar perfil</Button>
        </Typography>
        
     
    </Card>
  );
};
