import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { Link, useLoaderData } from 'react-router';
import AppCards from '../AppCards/AppCards'

const Home = () => {
    const data = useLoaderData();
    const trendingApps= data.slice(0,8);
    // console.log(trendingApps)
    // console.log(data)
    return (
        <div>
            <Banner></Banner>

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
                <AppCards trendingApps={trendingApps}></AppCards>
            </div>
            <div className='bg-[#F5F5F5] py-6'>
                <Link to={'/Apps'}><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#6F38E6] mx-[43%]"> Show All</button></Link>
            </div>
        </div>
    );
};

export default Home;