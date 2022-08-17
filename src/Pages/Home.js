import React from 'react';
import Banner from '../Components/Banner/Banner';
import HomeProducts from '../Components/HomeProducts';
import Summery from '../Components/Summery/Summery';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summery></Summery>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;