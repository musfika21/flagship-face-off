import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
    return <>
        <Navbar/>
        <div className='min-h-[calc(100vh-116px)]'>
            <div className='max-w-11/12 mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
                <Outlet ></Outlet>
            </div>
        </div>
        <Footer/>
    </>
};

export default MainLayout;