import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import {
  Button,
  Dialog,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postPack } from "../../../../../api/itemApi";
import {useSelector} from 'react-redux'
export function PackForm({ open, handleOpen }) {
  const [stock, setStock] = useState(0);
  const [time_start, setTime_start] = useState("00:00");
  const [time_end, setTime_end] = useState("01:00");
  const user = useSelector(state => state.user)

  const handlePlus = () => {
    setStock(stock + 1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleMinus = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  };

  const handleTimeStart = (time) => {
    setTime_start(time);
  };

  const handleTimeEnd = (time) => {
    setTime_end(time);
  };

  const submit = (info) => {
    const pack = {
        name: info.name,
        description: info.description,
        price: info.price,
        time_start: time_start,
        time_end: time_end,
        stock: stock
    }
    postPack(pack, user.token)
    .then((response) => {
      console.log(response);
  
      if (response.status === 201) {
        // El envío fue exitoso
      } else {
        console.error("Error al enviar el formulario:", response.data);
      }
    })
    .catch((error) => {
      console.error("Error al enviar el formulario:", error);
    });

  };

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
  return (
    <>
      <Dialog
        className="max-w-full w-full absolute top-1/6 bottom-0  m-0 rounded-t-2xl rounded-b-none z-10"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { translateY: 0, originY: "bottom" },
          unmount: { translateY: "100%", originY: "bottom" },
        }}
      >
        <form
          className="flex flex-col mb-2 mt-5 items-center"
          onSubmit={handleSubmit(submit)}
        >
          <div className="text-sizeSubtitle font-weightSubtitle text-colorNeutral1 flex justify-center">
            Introduce el número de Packs para hoy
          </div>
          <div
            className="flex flex-col items-center text-colorNeutral1 p-12"
            divider
          >
            <div className="w-60 h-24 bg-colorNeutral2 bg-opacity-20 rounded-2xl flex items-center justify-evenly p-5">
              <IconButton
                variant="outlined"
                className="rounded-full"
                size="sm"
                onClick={handleMinus}
              >
                <FontAwesomeIcon icon={faMinus} className="text-sizeTitle" />
              </IconButton>
              <span className="text-5xl font-extrabold">{stock}</span>
              <IconButton
                variant="gradient"
                className="rounded-full"
                size="sm"
                onClick={handlePlus}
              >
                <FontAwesomeIcon icon={faPlus} className="text-sizeTitle" />
              </IconButton>
            </div>
            <label className="text-left custom-text my-5 ">
              Nombre del pack:
            </label>
            <Input
              type={"text"}
              label="Pack"
              {...register("name", { required: true })}
            />

            <label className="text-left custom-text mb-2 mt-5">
              Selecciona el horario de recogida
            </label>
            <div>
              <span className="mx-4">De: </span>
              <Menu>
                <MenuHandler>
                  <Button variant="outlined" className="px-3 py-2">
                    {time_start}
                  </Button>
                </MenuHandler>
                <MenuList className="max-h-72 z-[10000]">
                  {timeList.map((hour, index) => {
                    return (
                      <MenuItem
                        key={index}
                        onClick={() => handleTimeStart(hour)}
                      >
                        {hour}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <span className="mx-4">a:</span>
              <Menu>
                <MenuHandler>
                  <Button variant="outlined" className="px-3 py-2">
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

            <label className="text-left custom-text mb-2 mt-5 ">
              Introduce el precio de venta
            </label>
            <Input
              type={"number"}
              label={"$"}
              {...register("price", { required: true })}
            />
            <label className="text-left custom-text mb-2 mt-5 ">
              Introduce una descripción del pack:
            </label>
            <div className="w-96">
              <Textarea
                label="Message"
                {...register("description", { required: true })}
              />
            </div>
          </div>
          <Button
            variant="gradient"
            fullWidth
            className="rounded-full custom-buttonCTAs normal-case w-60"
            type="submit"
          >
            Continuar
          </Button>
        </form>
      </Dialog>
    </>
  );
}
