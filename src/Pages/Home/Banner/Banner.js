import React from 'react';

const Banner = () => {
  
    
    return (
        <div className='bg-orange-200 grid md:grid-cols-2 grid-cols-1 '>
            <div className='ms-36 pb-20'>
        <h1 className='text-5xl mt-24 font-semibold'>Grow more. <br /> Spend less.</h1>

        <p className='text-xl font-medium mt-5'>Get access to up to $1,000,000+ in savings on the <br /> best software to scale your business.</p>
        <div>
            <button className='btn btn-secondary mt-10'>
                Join For free
            </button>
        </div>
            </div>  
            <div className='mt-36 ms-0 grid grid-cols-2'>
            <div>

            </div>
            <div>

            </div>
            </div>
        </div>
    );
};

export default Banner;