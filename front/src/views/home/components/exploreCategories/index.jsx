import Cards from "./cards";

import panaderia from "../../assets/panaderia1.jpg";
import verduleria from "../../assets/verduleria1.jpg";
import superMercado from "../../assets/superMercado1.jpg";
import Slider from "react-slick";

const ExploreCategories = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-10/12 mb-12">
        <h2 className="font-bold text-colorNeutral1 text-left leading-none text-sizeSubtitle my-10">
          Explora nuestros rubros
        </h2>

        <div className="lg:hidden">
          <Slider {...settings} className="">
            <Cards
              img={panaderia}
              title={"Panaderías"}
              category={"panaderia"}
            />
            <Cards
              img={verduleria}
              title={"Verdulerías"}
              category={"verduleria"}
            />
            <Cards
              img={superMercado}
              title={"Supermercados"}
              category={"supermercado"}
            />
          </Slider>
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-between gap-2">
            <Cards
              img={panaderia}
              title={"Panaderías"}
              category={"panaderia"}
            />
            <Cards
              img={verduleria}
              title={"Verdulerías"}
              category={"verduleria"}
            />
            <Cards
              img={superMercado}
              title={"Supermercados"}
              category={"supermercado"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCategories;
