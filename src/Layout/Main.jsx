import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-12 p-4 gap-4 '>
                <Home></Home>
                <div className='col-span-10 w-full bg-gray-100 rounded-lg'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Main;