import React from 'react';

const Card = ({data}) => {
    const {course,provider,discount_percentage,original_price,deal_price,link,logo}=data;
    const orginalPrice =parseInt(original_price)
    const dealPrice =parseInt(deal_price)
    const savePrice =orginalPrice - dealPrice;
    return (
        <div className=' mx-2 my-4 border '>
           <div className=' grid grid-cols-3 '>
            <div className='col-span-1 w-280 h-28'>
                <img className='w-full h-full' src={logo} alt="" />
            </div>
            <div className='w-full col-span-2 mt-5'>
            <h1 className='font-bold'>{provider}</h1>
            <p className='text-xs inline-flex'>{course}</p>
            </div>
            </div> 
           <div className='text-center my-5 '>
            <h1 >{discount_percentage}% Discount For 12 Months!!</h1>
            <p className='text-gray-400 text-sm font-semibold'>Save Upto {savePrice}$</p>
            </div> 
            <hr />
           <div className='flex gap-36 my-2'>
            <a className='btn btn-xs btn-primary' href={link} target="_blank" > Visit Site</a>
            <a className='btn btn-xs btn-secondary' > Primiare</a>
            </div> 
        </div>
    );
};

export default Card;