import { Link } from "wouter";

export default function Error404() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-red-500">Error 404</h1>
        <p className="m-5 text-xl text-gray-700">Página en construcción</p>
        <Link to="/" className="font-bold">
          Volver al Inicio
        </Link>
      </div>
    </>
  );
}
