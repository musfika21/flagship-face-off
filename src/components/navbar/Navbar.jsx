import React from 'react';
import { MdBookmarkAdd, MdShoppingCart } from 'react-icons/md';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='px-8 md:px-12 lg:px-16 xl:px-24'>
            <div className="navbar p-0 max-w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="cursor-pointer mr-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to='/'>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to='/about'>About</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to='/cart'><MdShoppingCart size={20} /></NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to='/favorites'><MdBookmarkAdd size={20} /></NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' className='font-medium text-xl'>FlagshipFaceOff</Link>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to='/about'>About</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to='/cart'><MdShoppingCart size={20} /></NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to='/favorites'><MdBookmarkAdd size={20} /></NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;