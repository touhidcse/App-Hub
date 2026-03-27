import React, { useEffect, useState } from 'react';
import InstalledApps from '../InstalledApps/InstalledApps';
import { getInstalledApp, removeFromInstalledDB } from '../../Utility/AppInstallation';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const Installation = () => {
    const [installedList, setInstalledList] = useState([])
    const [sort, setSort] = useState("")
    //worst case
    const data = useLoaderData();
    // console.log(data)

    // useEffect(()=>{},[])

    useEffect(() => {
        const installedAppData = getInstalledApp();
        const convertedInstalledApp = installedAppData.map(id => parseInt(id))
        const myInstalledList = data.filter(app => convertedInstalledApp.includes(app.id));
        console.log(myInstalledList)
        setInstalledList(myInstalledList)

    }, [])

    const handleUninstall = (id) => {
        removeFromInstalledDB(id);

        const updatedList = installedList.filter(app => app.id !== id);
        setInstalledList(updatedList);

        toast("App Uninstalled");
    };

    const handleSort = (type) => {
        setSort(type)
        if (type === "High-Low") {

            const sortedByDownloadsASC = [...installedList].sort((a, b) => a.downloads - b.downloads)
            setInstalledList(sortedByDownloadsASC)
        }

        if (type === "Low-High") {

            const sortedByDownloadsDSC = [...installedList].sort((a, b) => b.downloads - a.downloads)
            setInstalledList(sortedByDownloadsDSC)
        }
    }


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
                            <li><a onClick={() => handleSort("High-Low")}>High-Low</a></li>
                            <li><a onClick={() => handleSort("Low-High")}>Low-High</a></li>
                        </ul>
                    </details>
                </div>
            </div>

            {
                installedList.map((a) => ( <InstalledApps key={a.id} singleApp={a} onUninstall={handleUninstall}/>))
            }
        </div>
    );
};

export default Installation;