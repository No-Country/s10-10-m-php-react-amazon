import React from "react";
import Item from "./item";
import Slider from "react-slick";

const ItemList = ({ business }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5
        },
      },
    ],
  };

  return (
    <div className="w-screen ">
      <Slider {...settings}>
        {business && business.length !== 0 && (
          business.map((shop) =>
            shop.pack.map((item) => item ? <Item item={item} shop={shop} key={item.id} /> : null)
          )
        )}
      </Slider>
    </div>
  );
};

export default ItemList;
