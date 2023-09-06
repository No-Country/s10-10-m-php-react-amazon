import React from "react";

import {
  Card,
  Chip,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
export function CardPack({ item }) {
  return (
    <Link to={`/detail/${item.id}`}>
      <Card className="w-[285px] h-[327px] flex-none m-4 overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none h-48 w-full"
        >
          <img
            src={item.img}
            alt="pack image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="h-48 p-1 flex-column">
          <Typography className="text-title font-weightTitle text-colorNeutral1">
            {item.name}
          </Typography>
          <Typography variant="lead" color="gray" className="custom-text">
            Buscalo entre las {item.time}
          </Typography>
          <div className="h-[72px]">
            <div className="flex flex-wrap">
              {item.tags.map((tag, index) => {
                return (
                  <Chip
                    variant="ghost"
                    value={tag}
                    className="rounded-full lowercase custom-label m-1"
                    key={index}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex-column justify-between">
              <Typography variant="lead" color="gray" className="flex ">
                <FontAwesomeIcon icon={faStar} />
                <span className="custom-textButton">{item.shop.stars}</span>
                <span className="px-2 custom-textButton">
                  {item.shop.distance}
                </span>
              </Typography>
              <span>$ {item.price}</span>
            </div>
            <Button
              variant="filled"
              className="rounded-full normal-case custom-buttonCTAs bg-mainColor h-[38px]"
            >
              Comprar ya
            </Button>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}

export default CardPack;
