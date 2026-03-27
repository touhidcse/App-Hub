import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    const navigation = useNavigation();
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            {
                navigation.state === "loading" && (
                    <div className="fixed top-0 left-0 w-full h-full bg-white/60 flex justify-center items-center z-50">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                )
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;