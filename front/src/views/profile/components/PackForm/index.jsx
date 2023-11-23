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
  const [quantity, setQuantity] = useState(0);
  const user = useSelector((state) => state.user);
  const [packs, setPacks] = useState([]);
  const [id, setId] = useState(0);
  const [packsCompleted, setPacksCompleted] = useState(false);

  const handlePlus = () => {
    setQuantity(quantity + 1);
    handleAddPack()
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleMinus = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
      const lastPack = packs[packs.length - 1];
      if (lastPack) {
        handleRemovePack(lastPack.id);
      }
    }

  };

  const handleRemovePack = (id) => {
    const packIndex = packs.findIndex((pack) => pack.id === id);

    if (packIndex !== -1) {
      const updatedPacks = [...packs];
      updatedPacks.splice(packIndex, 1);
      setPacks(updatedPacks);
    }
  };
  const handleAddPack = () => {
    setId(id + 1)
    const newPack = { id, name: "", stock: 0, price: 0, description: "¡Dale un toque delicioso a tu día! Este pack puede incluir una variedad de productos de panadería como pan, bollos, galletas y más. Es una forma genial de disfrutar diferentes sabores y texturas que te ofrece la panadería. ¿Listo para la sorpresa?", time_start: "00:00", time_end: "01:00", tags: [] };
    setPacks([...packs, newPack]);
  };


  const submit = () => {
    packs.map((pack, index) => {
      const updatedPack = { ...pack, category: user.category }
      postPack(updatedPack, user.token)
        .then((response) => {
          if (response.status === 201) {
            toast.success("Se registró el producto con éxito");
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
          pack.stock &&
          pack.time_end &&
          pack.time_start
        );
      });

      setPacksCompleted(allPacksCompleted);
    }
  }, [packs]);

  return (
    <div className="flex flex-col h-screen w-full overflow-y-auto">
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
        className="flex flex-col mb-10 mt-5 items-center"
        onSubmit={handleSubmit(submit)}
      >
        <div className="text-sizeSubtitle font-weightTitle flex justify-center px-[2rem]">
          Introduce la cantidad de Packs para hoy
        </div>
        <div
          className="flex flex-col w-full items-center text-colorNeutral1 p-12 lg:pt-2"
          divider
        >
          <div className="h-[134px] lg:h-[250px]  w-96 lg:w-[700px] bg-colorPrimary  rounded-2xl flex items-center justify-evenly p-5 ">
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
            <span className="text-6xl font-extrabold text-white ">{quantity}</span>
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
          <div className="border-t border-gray-500 w-full my-5"></div>

          <div className="lg:w-[820px]">
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
                      handleMinus={handleMinus}
                      setPacks={setPacks}
                      packs={packs}
                    />
                  ))}
                </>
              )
            }
          </div>

        </div>
        <Button
          variant="gradient"
          fullWidth
          className="rounded-full custom-buttonCTAs normal-case w-60 "
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
