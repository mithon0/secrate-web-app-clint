import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
       <div className='bg-slate-900 text-slate-200 text-sm'>
         <div className="navbar bg-slate-900">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 rounded-box w-52">
            <li><Link>White Label & AP</Link></li>
            <li><Link>Affiliation</Link></li>
            <li><Link>get $20</Link></li>
            <li><Link>Sign In</Link></li>
            <li className='btn btn-warning w-full text-white '><Link >Join for free</Link></li>
              <hr />
              <li><Link>Projects Management</Link></li>
            <li><Link>Data</Link></li>
            <li><Link>Customer</Link></li>
            <li><Link>Development</Link></li>
            <li><Link>Marketing</Link></li>
            <li><Link>Finance</Link></li>
            <li><Link>Communication</Link></li>
            <li><Link>Sales</Link></li>
            <li><Link>Business</Link></li>
            <li><Link>It</Link></li>
            <li><Link>Human resourse</Link></li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Secrate</Link>
          <input type="text" placeholder="Type here" className="input input-bordered lg:w-96 md:w-80 sm:w-80" />
        </div>
        
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/business">White Label & AP</Link></li>
            <li><Link to="/affiliate">Affiliation</Link></li>
            <li><Link>get $20</Link></li>
            <li><Link>Sign In</Link></li>
            <li className='btn btn-warning text-white '><Link >Join for free</Link></li>
            
          </ul>
        </div>
      
       
      </div>
      <div>
          <div className="navbar-start w-full hidden lg:block">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/projects_management">Projects Management</Link></li>
            <li><Link to="data">Data</Link></li>
            <li><Link to="/customer">Customer</Link></li>
            <li><Link to="/development">Development</Link></li>
            <li className='pointer-events-none'><Link >Marketing</Link></li>
            <li className='pointer-events-none'><Link>Finance</Link></li>
            <li className='pointer-events-none'><Link>Communication</Link></li>
            <li className='pointer-events-none'><Link>Sales</Link></li>
            <li className='pointer-events-none'><Link>Business</Link></li>
            <li className='pointer-events-none'><Link>It</Link></li>
            <li className='pointer-events-none'><Link>Human resourse</Link></li>
            
            
            
          </ul>
        </div>
      </div>
       </div>

    );
};

export default Navber;