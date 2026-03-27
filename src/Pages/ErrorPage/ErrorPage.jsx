import React from 'react';
import errorImage from '../../assets/error-404.png'
import NavBar from '../../Components/Header/NavBar';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router';
const ErrorPage = () => {
    const navigate= useNavigate();
    return (
        <div className='max-w-6xl mx-auto bg-[#F5F5F5]'>
            <NavBar></NavBar>
            <img src={errorImage} className='px-96 p-10 object-contain' alt="" />
             <h1 className='text-5xl text-center pb-5'>Oops, Page not found!</h1>
              <p className='text-center pb-5'>The page your are looking for is not available.</p>
              <button onClick={()=>navigate(-1)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#6F38E6] mx-[43%]">Go Back!</button>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;