import { useEffect, useState } from "react";
import { Card, CardFooter, Button } from "@material-tailwind/react";
import {
  faBasketShopping,
  faCarrot,
  faBreadSlice,
} from "@fortawesome/free-solid-svg-icons";
import UserLogo from "../../assets/user-profile.svg";
import { Link, useRoute } from "wouter";
import { BiCross } from "react-icons/bi";
import { useSelector } from "react-redux";
import { getUserById } from "../../api/userApi";

export const CardProfile = () => {
  const user = useSelector(state => state.user)
  const [match, params] = useRoute("/detail/profile/:id");
  const id = params.id
    const [shop, setShop] = useState({})

  useEffect(() => {
    if (match)
    getUserById(id, user.token).then(response => {
        setShop(response.data)
    })
  }, [])


  const handleBack = () => {
    history.back()
  };



  let icon;
  if (shop.category == "panaderia") {
    icon = { faBreadSlice };
  } else if (shop.category == "supermercado") {
    icon = { faBasketShopping };
  } else if (shop.category == "verduleria") {
    icon = { faCarrot };
  }

    return (
      <div className="flex flex-col p-5 items-center justify-center ">
        <div className="flex items-center w-[333px] ">
          <Button
            variant="outlined"
            onClick={handleBack}
            className="rounded-full p-3 flex justify-center border-2 items-center w-[15px] h-[15px] p-3"
          >
            <span >X</span>
          </Button>
          <h3 className="text-sizeTitle ml-5">Perfil del local</h3>
          </div>
          <Card className=" w-[333px] h-[514px] mt-10 border border-black">
            <div className="mb-2 flex flex-col items-center justify-evenly h-full">
              <div className="mb-2 flex flex-col items-center justify-evenly h-full relative">
                <div className="w-[100px] h-[100px] relative rounded-full">
                  {shop.avatar ? (
                    <img
                      src={user.avatar}
                      alt="avatar"
                      className="object-contain w-full h-full rounded-full"
                    />
                  ) : (
                    <img
                      src={UserLogo}
                      className="bg-mainColor w-full h-full rounded-full"
                      alt="default user logo"
                    />
                  )}
                </div>
              </div>
              <div className="text-center">
                <h1 className="font-sizeText mb-3">{shop.name}</h1>
                <p className="custom-textButton">
                  {shop.location?.city}, {shop.location?.province}
                </p>
              </div>
              <div className="m-10 text-center">
                <p>{shop.category}</p>
                <p className="custom-filter  cursor-pointer">
                  {shop.location?.address || "No tiene designada una ubicación"}
                </p>
              </div>
            </div>
          </Card>
      </div>
    );
};
