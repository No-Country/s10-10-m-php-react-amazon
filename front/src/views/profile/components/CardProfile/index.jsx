import { Card, CardFooter, Button } from "@material-tailwind/react";
import {
  faBasketShopping,
  faCarrot,
  faBreadSlice,
} from "@fortawesome/free-solid-svg-icons";
import UserLogo from "../../../../assets/user-profile.svg";
import { Link } from "wouter";

export const CardProfile = ({ user }) => {
  let icon;
  if (user.category == "panaderia") {
    icon = { faBreadSlice };
  } else if (user.category == "supermercado") {
    icon = { faBasketShopping };
  } else if (user.category == "verduleria") {
    icon = { faCarrot };
  }

  return (
    <Card className=" w-[333px] h-[514px] mt-10 border border-black">
      <div className="mb-2 flex flex-col items-center justify-evenly h-full">
        <div className="mb-2 flex flex-col items-center justify-evenly h-full relative">
          <div className="w-[100px] h-[100px] relative rounded-full">
            {user.avatar ? (
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
          <h1 className="font-sizeText mb-3">{user.name}</h1>
          <p className="custom-textButton">
            {user.location.city} {user.location.province}
          </p>
        </div>
        <div className="m-10 text-center">
          <p>{user.category}</p>
          <Link to="/user/profile/map">
            <p className="custom-filter underline decoration-solid cursor-pointer">
              {user.location.address
                ? user.location.address
                : "No tienes designada tu ubicación"}
            </p>
          </Link>
        </div>
        <CardFooter>
          <Button
            variant="outlined"
            className="rounded-full mb-10  text-base normal-case font-weightTextButton text-colorPrimary  border-2 border-colorPrimary"
          >
            <Link to="/user/profile/edit">Editar perfil</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};
