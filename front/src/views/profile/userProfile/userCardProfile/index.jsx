import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPencil } from "@fortawesome/free-solid-svg-icons";

export const UserCardProfile = ({user}) => {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        <div className="flex">
          {user.avatar ? <img src={user.avatar} alt="avatar" className="object-contain w-40 h-40"/> : <div className="bg-mainColor rounded-full w-40 h-40"></div>}
            <div>
              <h1>{user.name}</h1>
              <p>{user.address} {user.city} {user.province} {user.country}</p>
            </div>
          </div>
        </Typography>
        <Typography className="flex justify-between">
          <FontAwesomeIcon icon={faLocationDot}/>
          <span>{user.address ? user.address : "No tienes designada tu ubicación"}</span>
          <FontAwesomeIcon icon={faPencil}/>
        </Typography>
      </CardBody>
     
    </Card>
  );
};
