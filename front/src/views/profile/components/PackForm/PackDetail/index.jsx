import React, { useEffect, useState } from "react";
import {
  faArrowLeft,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import {
  Button,
  Dialog,
  IconButton,
  Menu,
  Chip,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { postPack } from "../../../../../api/itemApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

const PackDetail = ({ open, handleOpen, handleSubmitPack, price, setPrice, description, setDescription, time_start, setTime_start, time_end, setTime_end, tags, setTags }) => {
  const timeList = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const tagsDefined = [
    "Celiaquía",
    "Sin Lactosa",
    "Sin Gluten",
    "Vegetariano",
    "Vegano",
    "Saludable",
  ];
  const handleTimeStart = (time) => {
    setTime_start(time);
  };

  const handleTimeEnd = (time) => {
    setTime_end(time);
  };

  const handleTag = (tag) => {
    setTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  return (
    <Dialog
      className="max-w-full w-full absolute   px-5 pt-3 bottom-0   m-0 rounded-t-2xl rounded-b-none "
      open={open}
      handler={handleOpen}
      animate={{
        mount: { translateY: 0, originY: "bottom" },
        unmount: { translateY: "100%", originY: "bottom" },
      }}
    >
      <h1 className="text-left text-sizeSubtitle font-weightTitle text-black my-3">
        Horario de recogida
      </h1>
      <div className="flex justify-center items-center">
        <Menu>
          <MenuHandler>
            <Button variant="outlined" className="px-3 py-1 text-lg">
              {time_start}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-72 z-[10000]">
            {timeList.map((hour, index) => {
              return (
                <MenuItem key={index} onClick={() => handleTimeStart(hour)}>
                  {hour}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <span className="border-t border-gray-500 w-[30px] h-px mx-5"></span>
        <Menu>
          <MenuHandler>
            <Button variant="outlined" className="px-3 py-1 text-lg">
              {time_end}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-72 z-[10000]">
            {timeList.map((hour, index) => {
              return (
                <MenuItem key={index} onClick={() => handleTimeEnd(hour)}>
                  {hour}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </div>

      <h1 className="text-left text-sizeSubtitle font-weightTitle text-black my-3">
        Introduce el precio de venta
      </h1>
      <Input
        type="number"
        placeholder="$"
        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden ",
        }}
        containerProps={{ className: "max-w-[80px] min-w-[80px]" }}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <h1 className="text-left text-sizeSubtitle font-weightTitle text-black my-3">
        Descripción del pack:
      </h1>
      <p className="text-black">
        Este texto aparecerá en la tarjeta de tu pack para los clientes, puedes
        editarlo si lo deseas
      </p>

      <div className="my-3">
        <Textarea
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden ",
          }}
          label="Message"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <h1 className="text-left text-sizeSubtitle font-weightTitle text-black my-3">
        Selecciona las palabras que describen mejor el contenido del pack
      </h1>
      <div className="flex w-full flex-wrap">
        {tagsDefined.map((tag, index) => {
          const content = (
            <>
              <span className="mr-3 text-sizeLabel">{tag}</span>
              <FontAwesomeIcon
                icon={tags.includes(tag) ? faCheck : faPlus}
              />
            </>
          );
          return (
            <Chip
              variant={"outlined"}
              value={content}
              color={"teal"}
              className={
                tags.includes(tag)
                  ? "rounded-full lowercase m-1 text-colorPrimary cursor-pointer bg-[#FFDBCC] border-[#FFDBCC]-200"
                  : "rounded-full lowercase m-1 text-colorPrimary cursor-pointer border border-teal-500"
              }
              onClick={() => handleTag(tag)}
              key={index}
            />
          );
        })}
      </div>
      <div className="border-t border-gray-500 w-full h-px my-5"></div>
      <div className="flex w-full justify-center mb-5 ">

        <Button
          variant="gradient"
          fullWidth
          className={"rounded-full font-weightText custom-buttonCTAs normal-case w-60 mb-5"}
          disabled={!price || !description || !time_start || !time_end}
          onClick={handleSubmitPack}
        >
          Continuar
        </Button>
      </div>
    </Dialog>
  );
};

export default PackDetail;
