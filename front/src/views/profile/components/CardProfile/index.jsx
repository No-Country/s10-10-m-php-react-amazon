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
    <Card className="mt-6 w-[333px] h-[221px]">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        <div className="flex">
          {user.avatar ? <img src={user.avatar} alt="avatar" className="object-contain w-[100px] h-[100px]"/> : <img src={UserLogo} className="bg-mainColor rounded-full w-[100px] h-[100px] fit-contain"></img>}
            <div className="m-5">
              <h1 className="font-sizeText mb-3">{user.name}</h1>
              <p className="custom-textButton">Barrio o ciudad{user.address} {user.city} {user.province} {user.country}</p>
            </div>
          </div>
        </Typography>
        <Typography className="flex justify-between mt-5">
          <FontAwesomeIcon icon={faLocationDot} className="custom-text mx-3"/>
          <span className="custom-filter">{user.address ? user.address : "No tienes designada tu ubicación"}</span>
        </Typography>
        <Typography className="flex justify-between">
          <FontAwesomeIcon icon={icon}/>
          <span>{user.category}</span>
        </Typography>
      </CardBody>
     
    </Card>
  );
};
