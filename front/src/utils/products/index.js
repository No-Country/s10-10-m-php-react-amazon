import Panaderia from "../../assets/panaderias.png";
import Supermercado from "../../assets/superMercado.png";
import Verdulerias1 from "../../assets/verduleria1.png";
import Verdulerias2 from "../../assets/verdulerias2.png";

const fechaHora = new Date()
export const products = [
  {
    id: 1,
    name: "Pack alergias e intolerancias",
    time: "8:30 - 9:15",
    price: 100,
    tags: ["celiaquía", "intolerancia al gluten", "sin Lactosa"],
    stars: 4.7,
    distance: 150,
    stock: 1,
    img: Panaderia,
    timestamp: new Date(fechaHora.getTime() - 3600000),
    location: {lat: -31.4444561, lng: -64.1773772}
  },
  {
    id: 2,
    name: "Pack de lacteos",
    time: "8:30 - 9:15",
    price: 200,
    tags: ["celiaquía"],
    stars: 4.7,
    distance: 150,
    stock: 3,
    img: Supermercado,
    timestamp: new Date(fechaHora.getTime()),
    location: {lat: -31.4443218, lng: -64.1815829}
  },
  {
    id: 3,
    name: "Pack de frutas",
    time: "8:30 - 9:15",
    price: 400,
    tags: [],
    stars: 4.7,
    distance: 150,
    stock: 1,
    img: Verdulerias1,
    timestamp: new Date(fechaHora.getTime() + 3600000),
    location: {lat: -31.444969, lng: -64.1850559}
  },
  {
    id: 4,
    name: "Pack verduras",
    time: "8:30 - 9:15",
    price: 100,
    tags: [],
    stars: 4.7,
    distance: 150,
    stock: 1,
    img: Verdulerias2,
    timestamp: new Date(fechaHora.getTime() + 7200000),
    location: {lat: -31.4464999, lng: -64.1868738}
  },
];
