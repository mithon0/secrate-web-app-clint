import React from 'react';
    import bnnr from "../../assets/images/affiliate.png"
const AffiliateBanner = () => {
    return (
        <div className='bg-red-100 grid grid-cols-2'>
            <div className='ms-20'>
                <h1 className='mt-20 text-4xl font-bold text-white'>Secret Affiliate Program</h1>
                <p className='text-lg mt-10'>A simple way to make money for referring people to Secret. Get 30% of all payments for 12 months — for every customer you refer. There's no limit on how much you can earn.</p>

                <button className='btn bg-white mt-10'>Become a secrate affiliate</button>
            </div>
            <div>
                <img src={bnnr} alt="" />
            </div>
        </div>
    );
};

export default AffiliateBanner;