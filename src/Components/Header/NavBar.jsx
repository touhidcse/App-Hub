import React from 'react';
import gitHumImage from '../../assets/github-icon-2.svg'
import logoImage from '../../assets/logo.png'
import { NavLink } from 'react-router';

const NavBar = () => {
    const links = <>
        <NavLink to='/' end
            className={({ isActive }) => isActive
                ? "text-white bg-blue-500 rounded"
                : ""}>
            <li className='m-2'>Home</li>
        </NavLink>

        <NavLink to='/Apps' className={({ isActive }) => isActive
            ? "text-white bg-blue-500 rounded"
            : ""}>
            <li className='m-2'>Apps</li>
        </NavLink>

        <NavLink to='/Installation' className={({ isActive }) => isActive
            ? "text-white bg-blue-500 rounded"
            : ""}>
            <li className='m-2'>Installation</li>
        </NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        {links}

                    </ul>
                </div>
                <NavLink to={'/'}><p className="btn btn-ghost text-xl text-cyan-400"><img src={logoImage} width={20} height={20} /> HERO.IO</p></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/touhidcse/' target='_blank' className="btn bg-[#6F38E6] text-white"> <img src={gitHumImage} height={20} width={20} alt="" /> Contribute</a>
            </div>
        </div>
    );
};

export default NavBar;