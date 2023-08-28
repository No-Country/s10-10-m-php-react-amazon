import Form from "./formUser";

const Login = () => {
  return (
    <div className="flex flex-col items-center bg-mainColor h-screen">
      <div className="p-10 font-medium text-customSizeTitle mt-8 text-white text-center">
        <p>¡Te damos la bienvenida de nuevo!</p>
      </div>
      <Form />
    </div>
  );
};

export default Login;
