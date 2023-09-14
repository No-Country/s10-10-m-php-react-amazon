import Panaderia from "../../assets/panaderias.png";
import Supermercado from "../../assets/superMercado.png";
import Verdulerias1 from "../../assets/verduleria1.png";
import Verdulerias2 from "../../assets/verdulerias2.png";

const fechaHora = new Date()
export const products = [
  {
    id: 1,
    name: "Pack intolerancias",
    time: "8:30 - 9:15",
    price: 100,
    tags: ["celiaquía", "sin Lactosa", "intolerancia al gluten", "celiaquía", "sin Lactosa", "intolerancia al gluten"],
    stock: 1,
    img: Panaderia,
    timestamp: new Date(fechaHora.getTime() - 3600000),
    detail: ["facturas", "medialunas",],
    shopId: 2
  },
  {
    id: 2,
    name: "Pack de lacteos",
    time: "8:30 - 9:15",
    price: 200,
    tags: ["celiaquía", "dulces sueños"],
    stock: 3,
    img: Supermercado,
    timestamp: new Date(fechaHora.getTime()),
    detail: ["yogures", "leche descremada"],
    shopId: 1
  },
  {
    id: 3,
    name: "Pack de frutas",
    time: "8:30 - 9:15",
    price: 400,
    tags: ["Delicias", "Magias Del campo"],
    stock: 1,
    img: Verdulerias1,
    timestamp: new Date(fechaHora.getTime() + 3600000),
    detail: ["manzanas", "bananas", "naranjas", "mandarinas"],
    shopId: 3
  },
  {
    id: 4,
    name: "Pack verduras",
    time: "8:30 - 9:15",
    price: 100,
    tags: ["Saludables", "Magias Del campo"],
    stars: 4.7,
    distance: 150,
    stock: 1,
    img: Verdulerias2,
    timestamp: new Date(fechaHora.getTime() + 7200000),
    shopId: 4
  },
];
