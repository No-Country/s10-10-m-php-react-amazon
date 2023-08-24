import React from 'react';
import Mission from './components/mission';
import ExploreCategories from './components/exploreCategories';
import CallToAction from './components/callToAction';
import AboutUs from './components/aboutUs';

const Home = () => {
    return (
        <>
            <div className='p-[2rem] flex flex-col items-center justify-center text-center'>
                <Mission />
                <ExploreCategories />
                <CallToAction />
                <AboutUs />
            </div>
        </>
    );
};

export default Home;