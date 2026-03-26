import React from 'react';
import { useLoaderData } from 'react-router';
import AppCards from '../AppCards/AppCards';


const Apps = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='text-center p-5'>
                <h1 className='text-5xl font-bold'>Out All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='p-5 flex justify-between'>
                <p className='text-2xl'>({data.length}) Apps found</p>
                <input type="search" name="search" placeholder='Search Apps' className='border-be-neutral-800' id="" />
            </div>
            <div>
                {
                   <AppCards data={data}></AppCards>
                }
            </div>
        </div>
    );
};

export default Apps;