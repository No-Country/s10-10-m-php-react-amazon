import React from 'react';
import Cards from '../cards';
import SwipeableViews from 'react-swipeable-views';

const SimilarPacks = () => {

    const handleSwipe = (index) => { };

    return (
        <div className="">
            <h3 className='font-bold text-[18px] text-left'>Packs similares</h3>
            {/* <SwipeableViews enableMouseEvents onChangeIndex={handleSwipe} resistance> */}
            <Cards />
            {/* </SwipeableViews> */}
        </div>
    );
};

export default SimilarPacks;