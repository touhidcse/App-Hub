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

    const parseDownloads = (value) => {
        if (!value) return 0;

        const num = parseFloat(value);

        if (value.includes("B")) return num * 1_000_000_000;
        if (value.includes("M")) return num * 1_000_000;
        if (value.includes("K")) return num * 1_000;

        return num;
    };
    const handleSort = (type) => {
        setSort(type);

        let sorted = [];

        if (type === "High-Low") {
            sorted = [...installedList].sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
        }

        if (type === "Low-High") {
            sorted = [...installedList].sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
        }

        setInstalledList(sorted);
    };

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
                installedList.map((a) => (<InstalledApps key={a.id} singleApp={a} onUninstall={handleUninstall} />))
            }
        </div>
    );
};

export default Installation;