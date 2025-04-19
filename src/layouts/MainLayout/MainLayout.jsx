import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
    return <>
        <Navbar/>
        <Outlet></Outlet>
        <Footer/>
    </>
};

export default MainLayout;