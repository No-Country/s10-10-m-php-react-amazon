import React, { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Cards from './cards';

import panaderia from '../../assets/panaderia1.jpg';
import verduleria from '../../assets/verduleria1.jpg';
import superMercado from '../../assets/superMercado1.jpg';

const ExploreCategories = () => {

    const handleSwipe = (index) => { };

    return (
        <div className='pl-[2rem] mb-12 w-96 '>
            <h2 className='font-bold text-colorNeutral1 text-left leading-none text-sizeSubtitle my-10'>
                Explora nuestros rubros
            </h2>
            <SwipeableViews enableMouseEvents onChangeIndex={handleSwipe} resistance>
                <Cards img={panaderia} title={"Panaderías"} />

                <Cards img={verduleria} title={"Verdulerías"} />

                <Cards img={superMercado} title={"Supermercados"} />
            </SwipeableViews>
        </div>
    );
};

export default ExploreCategories;