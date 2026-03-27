import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import Footer from '../../Components/Footer/Footer';
import appErrorImage from '../../assets/App-Error.png'
import { useNavigate } from 'react-router';
const ErrorApps = () => {
    const navigate = useNavigate();
    return (
        <div className='max-w-6xl mx-auto bg-[#F5F5F5]'>
            <img src={appErrorImage} className='px-96 p-10 object-contain' alt="" />
            <h1 className='text-5xl text-center pb-5'>OPPS!! APP NOT FOUND</h1>
            <p className='text-center pb-5'>The App you are requesting is not found on our system. Please try another apps</p>
            <button onClick={() => navigate(0)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#6F38E6] mx-[43%]">Go Back!</button>

        </div>
    );
};

export default ErrorApps;