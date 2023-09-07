import { Link } from "wouter";

const BasicFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={`py-8 bg-colorPrimary flex flex-col justify-center items-center  border-t-[3px] border-buttonFilledColor`}>
      <div className="text-sizeText space-x-10 flex justify-between text-colorNeutral3 font-bold mb-2">
        <Link to="/page-not-found">Ayuda</Link>
        <Link to="/page-not-found">Privacidad</Link>
        <Link to="/page-not-found">Términos</Link>
      </div>
      <div className="flex flex-col md:flex-row text-center py-2 text-colorNeutral2">
        <span className="font-bold">©{currentYear} Listo Para Llevar.</span>
        <span className="md:ml-2">Todos los derechos reservados.</span>
      </div>
    </div>
  );
};

export default BasicFooter;
