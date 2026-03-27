import React from 'react';

const Installation = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='text-center p-5'>
                <h1 className='text-5xl'>Your Installed Apps</h1>
                <p className='mt-5'>Explore All trending Apps Developed by us</p>
            </div>
            <div className='flex justify-between p-5'>
                <div>
                    <p className='text-2xl'>1 App found</p>
                </div>
                <div>
                    <details className="dropdown">
                        <summary className="btn m-1">Sort By Dowload</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-full shadow-sm">
                            <li><a>High-Low</a></li>
                            <li><a>Low-High</a></li>
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Installation;