import React from 'react';
import googlePlayIcon from '../../assets/Google_Play_2022_icon.svg.png'
import appStoreIcon from '../../assets/app-store-og-twitter.png'
import heroImage from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
                <div className=" hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">We Build <br />
                            <span className='text-[#6F38E6]'>Productive</span> Apps</h1>
                        <p className="py-6">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler,
                            smarter, and more exciting.Our goal is to turn your ideas into digital experiences
                            that truly make an impact.
                        </p>
                        <a href="https://play.google.com/store" target='_blank'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> <img src={googlePlayIcon} width={20} height={20} /> Google Play</button></a>
                        <a href="https://www.apple.com/app-store/" target='_blank'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl ml-5"> <img src={appStoreIcon} width={40} height={40} /> App Store</button></a>

                        <img className='mt-6' src={heroImage} alt="" />
                    </div>
                </div>
            </div>
    );
};

export default Banner;