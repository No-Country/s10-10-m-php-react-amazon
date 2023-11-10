import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import { getPurchases } from "../../../../../api/authApi";
import CardPurchases from "./cardPurchases";

const Purchases = () => {
  const user = useSelector((state) => state.user);
  const [purchases, setPurchases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleBack = () => {
    history.back();
  };


  useEffect(() => {
    setIsLoading(true);
    getPurchases(user.token)
      .then((response) => {
        setPurchases(response.data.Purchases);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);



  const orderedPurchase = purchases.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));


  return (
    <div className="h-screen p-[1rem]">
      <div className=" w-full h-full">
        <div className="flex  items-center text-left mb-[2rem]  text-[24px] font-bold text-colorNeutral1">
          <Button
            onClick={handleBack}
            className="rounded-full p-1 border-2 border-colorNeutral1 bg-colorNeutral mr-3"
          >
            <BiArrowBack size={16} className="text-colorNeutral1" />
          </Button>
          <h3>Historial de Compras</h3>
        </div>

        <div className="flex flex-col h-[85vh] gap-6 overflow-y-auto min-w-[350px] snap-y w-full items-center text-sizeTitle">
          {purchases && purchases.length > 0 ? (
            orderedPurchase.map((item) => <CardPurchases key={item.id} item={item} />)
          ) : (
            <h1 className="mt-5">No hay packs comprados</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Purchases;
