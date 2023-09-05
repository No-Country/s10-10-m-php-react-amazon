import SwipeableViews from 'react-swipeable-views';
import Cards from './cards';

import panaderia from '../../assets/panaderia1.jpg';
import verduleria from '../../assets/verduleria1.jpg';
import superMercado from '../../assets/superMercado1.jpg';

const ExploreCategories = () => {

    const handleSwipe = (index) => { };

    return (
        <div className='pl-[2rem] lg:px-[2rem] mb-12 w-96 lg:w-full lg:mb-24'>
            <h2 className='font-bold text-colorNeutral1 text-left leading-none text-sizeSubtitle my-10'>
                Explora nuestros rubros
            </h2>
            <div className='sm:hidden'>
                <SwipeableViews enableMouseEvents onChangeIndex={handleSwipe} resistance>
                    <Cards img={panaderia} title={"Panaderías"} />
                    <Cards img={verduleria} title={"Verdulerías"} />
                    <Cards img={superMercado} title={"Supermercados"} />
                </SwipeableViews>
            </div>
            <div className='hidden lg:block'>
                <div className='flex justify-between gap-7'>
                    <Cards img={panaderia} title={"Panaderías"} />
                    <Cards img={verduleria} title={"Verdulerías"} />
                    <Cards img={superMercado} title={"Supermercados"} />
                </div>
            </div>
        </div >
    );
};

export default ExploreCategories;
