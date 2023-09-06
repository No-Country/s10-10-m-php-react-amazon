import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "wouter";
import Logo from "../../assets/logo.png";

const BasicNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <Link to="/page-not-found">¿Cómo funciona?</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <Link to="/page-not-found">Sobre nosotros</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <Link to="/page-not-found">Ayuda</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <Link to="/user/profile">Mi Perfil</Link>
      </Typography>
    </ul>
  );

  return (
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
          <Typography
            variant="small"
            className="font-bold text-colorPrimary hidden lg:inline-block"
          >
            <Link to="/auth/user/signup">Registrarte</Link>
          </Typography>
          <Button
            size="sm"
            className="ml-10 hidden lg:inline-block bg-colorPrimary"
            style={{ textTransform: "none" }}
          >
            <Link to="/auth/user/login">Ingresar</Link>
          </Button>
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
        <div className="container mx-auto text-center">
          {navList}
          <Typography
            variant="small"
            className="p-1 font-bold text-colorPrimary"
          >
            <Link to="/auth/user/signup">Registrarte</Link>
          </Typography>
          <Button
            size="sm"
            className="mb-2 bg-colorPrimary"
            style={{ textTransform: "none" }}
          >
            <Link to="/auth/user/login">Ingresar</Link>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default BasicNavbar;
