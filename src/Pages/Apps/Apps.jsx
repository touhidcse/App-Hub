import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCards from '../AppCards/AppCards';
import ErrorApps from '../ErrorApps/ErrorApps';

const Apps = () => {
    const data = useLoaderData();
    const [searchText, setSearchText] = useState("");
    const filteredApps = data.filter(app => app.title.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <div className='bg-[#F5F5F5]'>
            <div className='text-center p-5'>
                <h1 className='text-5xl font-bold'>Our All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='p-5 flex justify-between items-center'>
                <p className='text-2xl'>  ({filteredApps.length}) Apps found</p>

                <input type="search" placeholder='Search Apps' value={searchText} onChange={(e) => setSearchText(e.target.value)}
                    className='border border-gray-400 px-3 py-1 rounded'
                />
            </div>

            <div>
                {
                    filteredApps.length > 0 ? (
                        <AppCards data={filteredApps} ></AppCards>
                    ) : (
                        <ErrorApps ></ErrorApps> 
                    )
                }
            </div>
        </div>
    );
};

export default Apps;