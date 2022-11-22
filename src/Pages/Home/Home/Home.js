import React from 'react';
import About from '../About/About';
import HomeBanner from '../HomeBanner/HomeBanner';
import MostDoneation from '../MostDoneation/MostDoneation';

const Home = () => {
    return (
        <div className='md:w-5/6 mx-auto my-4'>
            {/* carusel add here */}
            <HomeBanner></HomeBanner>
            {/* home about add here */}
            <About></About>
            {/* most doneation component gose here */}
            <MostDoneation></MostDoneation>
        </div>
    );
};

export default Home;