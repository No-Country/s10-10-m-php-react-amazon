import FormUser from "./formUser";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center bg-mainColor h-screen">
      <div className="w-48 leading-tight font-bold mt-8 text-white text-center">
        <p> ¡Regístrate, compra a precios bajos y marca la diferencia!</p>
      </div>
      <FormUser />
    </div>
  );
};

export default SignUp;
