import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import HotDeal from '../HotDeal/HotDeal';

const Home = () => {
    return (
        <div>
           <Helmet
           title='Secrate'
           >
            </Helmet> 
            <Banner></Banner>
            <HotDeal
            heading={"What's hot."}
            subHeading={"Here are some of the most in-demand deals according to our users."}
            ></HotDeal>
            <p className='text-center text-xs mb-10 text-red-600'>{"{Other section comming soon.........}"}</p>
        </div>
    );
};

export default Home;