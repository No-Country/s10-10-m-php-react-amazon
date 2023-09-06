import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "wouter";
import { navigate } from "wouter/use-location";
import { cerrarSesion } from "../../features/userSlice";

const Logout = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(cerrarSesion());
      navigate("/");
    }, 2000);
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold">Cerrando sesión</h1>
        <p className="m-5 text-xl text-gray-700">Hasta pronto {user.name}</p>
      </div>
    </>
  );
};

export default Logout;
