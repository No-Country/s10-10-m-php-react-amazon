import React from "react";
import soldOut1 from "../../assets/soldOut1.png"
import soldOut2 from "../../assets/soldOut2.webp"

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
import Panaderia from '../../assets/bakery.jpg'
import Supermercado from '../../assets/superMercado.png'
import Verduleria from '../../assets/verduleria1.png'

export function CardPack({ item, shop }) {
  const tags = JSON.parse(item.tags)
  const timeStartParts = item.time_start.split(' ')[1].split(':');
  const timeStart = `${timeStartParts[0]}:${timeStartParts[1]}`;

  const timeEndParts = item.time_end.split(' ')[1].split(':');
  const timeEnd = `${timeEndParts[0]}:${timeEndParts[1]}`;

  const img = shop.category == "panaderia" ? Panaderia : shop.category == "supermercado" ? Supermercado : Verduleria


  return (


    <Card className='w-[254px] h-[416px] relative flex-none m-4  overflow-hidden cursor-pointer shadow-none border-[2px] border-colorNeutral2'>
      {
        item.stock === 0 &&
        <div>
          <img src={soldOut1} alt="soldOut1" className="absolute z-40 blur-none" />
        </div>

      }
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none h-[120px] w-full relative "
      >
        <img
          src={item.photo_url || img}
          alt="pack image"
          className="h-full w-full object-cover"
        />
        <div className="flex items-center justify-center absolute right-3 bottom-1 bg-colorNeutral3 rounded-md">
          <h3 className="text-sizeNote font-bold text-colorNeutral1 px-2">{shop.name}</h3>
        </div>
      </CardHeader>
      <div className="text-[10px] text-colorNeutral3 font-bold px-2 py-[1px] rounded-full bg-colorNeutral1 absolute">
        <h3>Dispobles / {item.stock}</h3>
      </div>
      <section className={`h-48 p-[0.70rem] flex-column  ${item.stock === 0 ? "blur-[3px]" : "blur-none"}`}>
        <Typography className="text-sizeSubtitle font-weightTitle text-colorNeutral1 leading-none mb-2">
          {item.name}
        </Typography>

        <div className="flex item-center gap-8 mt-4">
          <div className="text-mainColor flex items-center gap-1 ">
            <FontAwesomeIcon icon={faStar} />
            <span>{shop.stars ? shop.stars : "0"}</span>
          </div>
          <span className="px-2  text-colorNeutral1">
            {shop.distance}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 text-sizeNote my-5 text-colorPrimary font-bold h-[57px] overflow-y-auto  snap-y">
          {tags && tags.length > 0 ? tags.map((tag, index) => (
            <span className="bg-buttonFilledColor px-2 py-[1px] h-[24.5px] rounded-md" key={index}>
              {tag}
            </span>
          )) : null}
        </div>

        <div className="text-sizeNote font-weightSubtitle flex items-center justify-between  text-colorNeutral1 mb-3">
          <span className="text-[14px]">Retirar entre</span>
          <div className="border-[2px] border-colorNeutral2  py-[2px] rounded-md">
            <span className="px-4 text-[12px]">{timeStart} y {timeEnd}</span>
          </div>
        </div>

        <div className="h-[1px] border-t-[2px] border-colorNeutral2"></div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex-column justify-between">
            <span className="text-colorPrimary font-extrabold text-sizeSubTitle">$ {item.price}</span>
          </div>
          {
            item.stock !== 0 ?
              (
                <Link to={`/detail/${item.id}`}>
                  <Button variant="filled" className="rounded-full normal-case custom-buttonCTAs px-3 bg-colorPrimary h-[38px] text-buttonFilledColor">
                    Comprar
                  </Button>
                </Link>
              )
              :
              (
                <Button variant="filled" className="rounded-full normal-case custom-buttonCTAs px-3 bg-colorPrimary h-[38px] text-buttonFilledColor">
                  Comprar
                </Button>
              )
          }
        </div>
      </section>
    </Card>

  );
}

export default CardPack;
