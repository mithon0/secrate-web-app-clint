import React, { useEffect, useState } from 'react';
import Card from './Card';

const HotDeal = ({heading,subHeading}) => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))

    })
    console.log(data);
    return (
        <div>
            <div className='mx-10 my-5'>
                <h1 className='text-5xl font-bold'>{heading}</h1>
                <p className='text-xs font-semibold text-gray-500'>{subHeading}</p>
            </div>
            <div className='grid grid-cols-4'>
          {data.map(d=><Card
          key={data.link}
          data={d}
          ></Card>)}
        </div>
        </div>
    );
};

export default HotDeal;