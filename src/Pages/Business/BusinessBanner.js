import React from 'react';
import bnnr from "../../assets/images/banner2.png"
const BusinessBanner = () => {
    return (
        <div className='grid grid-cols-2 pb-5 bg-blue-600'>
            <div className='ms-28'>
            <h1 className='mt-20 text-4xl font-bold text-white'>Secret Business</h1>
            <p className='w-4/5 text-xl mt-5 text-white font-semibold'>
            Give access to millions of savings on the best SaaS to your community without the hassle of managing your own perks program.
            </p>
            <p className='w-4/5 mt-10 text-xl text-white font-semibold'>
            Hundreds of VCs, accelerators, incubators, agencies, fintech, and marketplaces rely on Secret’s white-label solution or API to support their community.
            </p>
            <button className='btn mt-10 bg-white'>Contact Us</button>
            </div>
            <div className='mt-10'>
                <img src={bnnr} alt="" />
            </div>
        </div>
    );
};

export default BusinessBanner;