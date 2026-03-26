import React, { Suspense } from 'react';
import { SiPanasonic } from 'react-icons/si';
import AppCard from '../AppCard/AppCard'

const AppCards = ({trendingApps,data}) => {
    return (
        <div>
            <Suspense fallback={<span>Loading</span>}>
                <div className='grid grid-cols-4 gap-5 bg-[#F5F5F5]'>
                    {
                        trendingApps?.map((singleApp) => <AppCard key={singleApp.id} singleApp={singleApp}></AppCard>)
                    }
                    {
                        data?.map((singleApp)=> <AppCard key={singleApp.id} singleApp={singleApp}></AppCard>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default AppCards;