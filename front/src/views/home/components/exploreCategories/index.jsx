
import Cards from './cards';

import panaderia from '../../assets/panaderia1.jpg';
import verduleria from '../../assets/verduleria1.jpg';
import superMercado from '../../assets/superMercado1.jpg';
import Slider from 'react-slick';

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
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      };

    return (
        <div className='pl-[2rem] lg:px-[2rem] mb-12 w-full lg:mb-24'>
            <h2 className='font-bold text-colorNeutral1 text-left leading-none text-sizeSubtitle my-10'>
                Explora nuestros rubros
            </h2>
            
                <Slider {...settings}>
                    <Cards  img={panaderia} title={"Panaderías"} category={"panaderia"}/>
                    <Cards img={verduleria} title={"Verdulerías"} category={"verduleria"}/>
                    <Cards img={superMercado} title={"Supermercados"} category={"supermercado"}/>
                </Slider>
            
        </div >
    );
};

export default ExploreCategories;
