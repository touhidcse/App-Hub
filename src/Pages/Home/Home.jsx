import React from 'react';
import googlePlayIcon from '../../assets/Google_Play_2022_icon.svg.png'
import appStoreIcon from '../../assets/app-store-og-twitter.png'
import heroImage from '../../assets/hero.png'

const Home = () => {
    return (
        <div>
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

            <div className='bg-[#6F38E6] text-white py-6'>
                <h1 className='text-3xl font-bold text-center'>Trusted by Millions, Built for You</h1>
                <div className='grid grid-cols-1 md:grid grid-cols-1 lg:flex justify-around p-10'>
                    <div>
                        <p>Total Downloads</p>
                        <h1 className='text-5xl font-bold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <h1 className='text-5xl font-bold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <h1 className='text-5xl font-bold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>

                </div>
            </div>

            <div className='text-center py-6 bg-[#F5F5F5]'>
                <h1 className='text-3xl font-bold '>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div id='forTrendingApps'>

            </div>
            <div className='bg-[#F5F5F5] py-6'>

                <a href="" ><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#6F38E6] mx-[43%]"> Show All</button></a>

            </div>
        </div>
    );
};

export default Home;