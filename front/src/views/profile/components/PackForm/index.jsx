import {
  faPlus,
  faMinus,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { postPack } from "../../../../api/itemApi";
import { useSelector } from "react-redux";
import { toast, Toaster } from "sonner";
import PackItem from "./PackItem";
export function PackForm({ open, handleOpen }) {
  const [stock, setStock] = useState(0);
  const user = useSelector((state) => state.user);
  const [packs, setPacks] = useState([]);
  const [id, setId] = useState(0);
  const [packsCompleted, setPacksCompleted] = useState(false);
 
  const handlePlus = () => {
    setStock(stock + 1);
    handleAddPack()
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleMinus = () => {
    if (stock > 0) {
      setStock(stock - 1);
      handleRemovePack(packs.length-1)
    }
  };

  const handleAddPack = () => {
    setId(id+1)
    const newPack = { id, name: "", quantity: 0, price: 0, description: "¡Dale un toque delicioso a tu día! Este pack puede incluir una variedad de productos de panadería como pan, bollos, galletas y más. Es una forma genial de disfrutar diferentes sabores y texturas que te ofrece la panadería. ¿Listo para la sorpresa?", time_start: "00:00", time_end: "01:00", tags: [] };
    setPacks([...packs, newPack]);
  };

  const handleRemovePack = (id) => {
    const updatedPacks = packs.filter((el) => el.id !== id);
    setPacks(updatedPacks);
  };

  const submit = () => {
    packs.map((pack, index) => {
      console.log(user)
      const updatedPack = {...pack, category: user.category}
      console.log(updatedPack)
      postPack(updatedPack, user.token)
      .then((response) => {
        console.log(response)
        if (response.status === 201) {
          toast("Se registró el producto con éxito");
          handleOpen();
        } else {
          console.error("Error al enviar el formulario:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
      });
    })
  }

  useEffect(() => {
    if (packs.length > 0) {
      const allPacksCompleted = packs.every((pack) => {
        return (
          pack.name &&
          pack.price &&
          pack.description &&
          pack.quantity &&
          pack.time_end &&
          pack.time_start
        );
      });

      setPacksCompleted(allPacksCompleted);
    }
  }, [packs]);

  return (
    <div className="flex flex-col h-screen ">
      <div className="flex px-5">
        <IconButton
          variant="outlined"
          size="sm"
          className="rounded-full mx-5 border-2"
          onClick={handleOpen}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </IconButton>
        <h1 className="custom-title">Añadir pack</h1>
      </div>
      <form
        className="flex flex-col mb-2 mt-5 items-center"
        onSubmit={handleSubmit(submit)}
      >
        <div className="text-sizeSubtitle font-weightTitle flex justify-center">
          Introduce la cantidad de Packs para hoy
        </div>
        <div
          className="flex flex-col w-full items-center text-colorNeutral1 p-12 "
          divider
        >
          <div className="h-[134px]  w-96 bg-colorPrimary  rounded-2xl flex items-center justify-evenly p-5">
            <IconButton
              variant="outlined"
              color="white"
              className="rounded-full"
              size="sm"
              onClick={handleMinus}
              disabled={packs.length == 0}
            >
              <FontAwesomeIcon icon={faMinus} className="text-sizeTitle" />
            </IconButton>
            <span className="text-6xl font-extrabold text-white ">{stock}</span>
            <IconButton
              variant="outlined"
              color="white"
              className="rounded-full"
              size="sm"
              onClick={handlePlus}

            >
              <FontAwesomeIcon icon={faPlus} className="text-sizeTitle" />
            </IconButton>
          </div>
          <div className="border-t border-gray-500 w-full h-px my-5"></div>
          {packs.length > 0 &&
          (
            <>
            <label className="text-left  my-5 text-sizeSubtitle font-weightTitle">
            Nombre del pack:
          </label>
          <p>Este texto aparecerá en la tarjeta de tu pack para los clientes</p>
          <div className="flex justify-end w-full px-5">
            <p className="text-right mr-5 pr-5">Cantidad</p>
          </div>
          {packs.map((item) => (
            <PackItem
              item={item}
              key={item.id}
              handleRemovePack={handleRemovePack}
              setPacks={setPacks}
              packs={packs}
            />
          ))}

          
            </>
          )  
        }
          
        </div>
        <Button
          variant="gradient"
          fullWidth
          className="rounded-full custom-buttonCTAs normal-case w-60"
          type="submit"
          disabled={!packsCompleted}
        >
          Listo, Añadir Pack
        </Button>
      </form>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
