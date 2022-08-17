import React from 'react';
import Banner from '../Components/Banner/Banner';
import HomeProducts from '../Components/HomeProducts';
import Summery from '../Components/Summery/Summery';
import ImageBanner from '../Components/ImageBanner/ImageBanner'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summery></Summery>
            <HomeProducts></HomeProducts>
            <ImageBanner></ImageBanner>
        </div>
    );
};

export default Home;