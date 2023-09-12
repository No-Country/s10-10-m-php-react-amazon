import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@material-tailwind/react";
import React from "react";
import { Link } from "wouter";

import Panaderia from "../../../../../assets/bakery.jpg";
import LogoExample from "../../../../../assets/profileExample.png";
const MapItem = ({ item, shop }) => {
  const timeStartParts = item.time_start.split(" ")[1].split(":");
  const timeStart = `${timeStartParts[0]}:${timeStartParts[1]}`;

  const timeEndParts = item.time_end.split(" ")[1].split(":");
  const timeEnd = `${timeEndParts[0]}:${timeEndParts[1]}`;
  return (
    <Link to={`/detail/${item.id}`}>
      <Card className="w-[285px] h-[200px] flex flex-col rounded-none mx-3 px-3  z-[100] cursor-pointer">
        <div className="h-1/2">
          <div
            className="absolute inset-0 h-1/2"
            style={{ backgroundColor: "#045162", opacity: 0.85, zIndex: 5 }}
          ></div>
          <div
            className="absolute bg-cover bg-no-repeat w-full h-1/2"
            style={{
              backgroundImage: `url('${Panaderia}')`,
            }}
          ></div>
          <div className="relative z-10 flex py-3 flex items-center">
            <img
              src={shop.avatar || LogoExample}
              alt="avatar"
              className="object-cover w-20 h-20 rounded-full"
            />
            <div>
              <h1 className="text-white font-extrabold ml-3">{shop.name}</h1>
            </div>
          </div>
        </div>
        <div className="h-1/2 flex flex-col justify-evenly">
          <h1 className="custom-text">{item.name}</h1>
          <p className="custom-note">
            Buscalo entre las {timeStart} - {timeEnd}
          </p>
          <div className="text-mainColor flex items-center gap-1 w-full">
            <FontAwesomeIcon icon={faStar} />
            <span className="mr-3">{shop.stars || "?"}</span>
            <span>{shop.distance || "?"}</span>
            <span className="absolute mr-3 right-0 text-sizeSubtitle font-extrabold text-colorPrimary">
              $ {item.price}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default MapItem;
