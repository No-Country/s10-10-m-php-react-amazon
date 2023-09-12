import React from "react";
import Slider from "react-slick";
import MapItem from "../MapItem";

const MapItemList = ({ selectedBusiness }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
        },
      },
      {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
        },
      },
    ],
  };

  if (selectedBusiness && selectedBusiness.pack.length > 0) {
    return (
        <div className="w-screen">

        <Slider {...settings} >
            {selectedBusiness.pack.map((item) => (
              <MapItem shop={selectedBusiness} item={item} key={item.id} />
            ))}
        </Slider>
        </div>

    );
  } else {
  }
};

export default MapItemList;
