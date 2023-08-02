import React from 'react';
import { Outlet } from 'react-router-dom';

const Data = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Data;