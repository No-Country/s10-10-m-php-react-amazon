import React from "react";
import Item from "./item";
import Slider from "react-slick";

const ItemList = ({ items }) => {
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
        }
      }
    ]
  };
  
  return (
    <div className="w-screen ">
        <Slider {...settings}>
          {items.length !== 0 ? (
            items.map((item, index) => <Item item={item} key={index} />)
          ) : (
            <div>
              <h3>No hay coincidencias con su búsqueda</h3>
            </div>
          )}
          </Slider>
    </div>
  );
};

export default ItemList;
