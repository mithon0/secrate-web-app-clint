import React from 'react';
import { Link } from 'react-router-dom';
import HotDeal from '../Home/HotDeal/HotDeal';

const BannerOfProjects = ({details,heading}) => {
    return (
      <div>
          <div className='bg-slate-900   pt-10 pb-10'>
            <div className='mx-28'>
            <p className='text-sm  font-semibold'><Link className='text-gray-500' to="/">Secrate </Link> <span className='text-white'> {">"} Project Management Software promo code -{}</span></p>
             <h1 className='text-white text-4xl font-bold mt-5'>{heading}</h1>
             <p className='text-white text-sm w-[660px] font-semibold mt-5'>{details}</p>
             <h1 className='text-3xl text-white font-bold mt-10 mx-28 mb-2'>All categories in Project Management</h1>
         <div className='flex gap-10 mx-28 mt-5 '>

            <Link className='btn btn-accent' to="/projects_management/productivity">Productivity</Link>
            <Link className='btn btn-accent' to="/projects_management/task">Task</Link>
            <Link className='btn btn-accent' to="/projects_management/colaboretion">Colaboretion</Link>
         </div>
            </div>
        </div>
        <div>
            {/* todo fetch data category wise */}
            <HotDeal
            heading={heading}
            subHeading={""}
            ></HotDeal>
        </div>
      </div>
    );
};

export default BannerOfProjects;