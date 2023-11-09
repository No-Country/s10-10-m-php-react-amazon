import { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, useLocation } from "wouter";
import {navigate} from "wouter/use-location"
import Logo from "../../assets/logo.png";
import { Modal } from "./modal/Modal";
import { useSelector } from "react-redux";

const BasicNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [userAction, setUserAction] = useState("");
  const user = useSelector((state) => state.user);
  const [location] = useLocation();
  const handleOpenModal = () => setOpenModal(!openModal);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleHowWorks = () => {
    if (location != "/") {
      navigate("/")
    }
    setTimeout(() => {
      const howWorksSection = document.getElementById("how-works");
      console.log(howWorksSection)
      if (howWorksSection) {
        window.scrollTo({
          top: howWorksSection.offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
  }
  
  const handleAboutUs = () => {
    if (location != "/") {
      navigate("/")
    }
    setTimeout(() => {
      const aboutUsSection = document.getElementById("about-us");
      if (aboutUsSection) {
        window.scrollTo({
          top: aboutUsSection.offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
  }


  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <span className="cursor-pointer" onClick={handleHowWorks}>¿Cómo funciona?</span>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <span className="cursor-pointer" onClick={handleAboutUs}>Sobre nosotros</span>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <Link to="/page-not-found">Ayuda</Link>
      </Typography>
      {user.token && user.id && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <Link to="/user/profile">Mi Perfil</Link>
        </Typography>
      )}
    </ul>
  );

  return (
    <>
      <Navbar className="mx-auto  py-2 px-4 lg:px-8 lg:py-4 shadow-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <img
              src={Logo}
              alt="Listo Para Llevar"
              className="object-cover object-center w-48 cursor-pointer"
            />
          </Link>

          <div className="hidden lg:block">{navList}</div>
          <div>
            {!user.token || !user.id ? (
              <Button
                size="sm"
                className="ml-10 hidden lg:inline-block bg-colorPrimary font-weightText"
                style={{ textTransform: "none" }}
                onClick={() => {
                  handleOpenModal();
                  setUserAction("signUp");
                }}
              >
                Registrarte
              </Button>
            ) : (
              ""
            )}

            {user.token && user.id ? (
              <Button
                size="sm"
                className="ml-10 hidden lg:inline-block bg-colorPrimary font-weightTextButton"
                style={{ textTransform: "none" }}
              >
                <Link to="/logout">Cerrar sesión</Link>
              </Button>
            ) : (
              <Button
                size="sm"
                className="ml-10 hidden normal-case lg:inline-block bg-colorPrimary font-weightTextButton"
                onClick={() => {
                  handleOpenModal();
                  setUserAction("login");
                }}
              >
                Ingresar
              </Button>
            )}
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>

        <Collapse open={openNav}>
          <div className="container mx-auto text-center mt-5">
            <div className="flex flex-col items-center">
              {!user.token || !user.id ? (
                <Button
                  size="sm"
                  className=" bg-colorPrimary font-weightTextButton"
                  style={{ textTransform: "none" }}
                  onClick={() => {
                    handleOpenModal();
                    setUserAction("signUp");
                  }}
                >
                  Registrarte
                </Button>
              ) : (
                ""
              )}
              {user.token && user.id ? (
                <Button
                  size="sm"
                  className="normal-case bg-colorPrimary font-weightTextButton"
                  style={{ textTransform: "none" }}
                >
                  <Link to="/logout">Cerrar sesión</Link>
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="normal-case bg-colorPrimary font-weightTextButton mt-2"
                  onClick={() => {
                    handleOpenModal();
                    setUserAction("login");
                  }}
                >
                  Ingresar
                </Button>
              )}
            </div>
            {navList}
          </div>
        </Collapse>
      </Navbar>
      <Modal open={openModal} setOpen={setOpenModal} userAction={userAction} />
    </>
  );
};

export default BasicNavbar;
