import React from 'react';
import downloadIconImage from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
const InstalledApps = ({ singleApp, onUninstall }) => {
    const { id, image, title, downloads, ratingAvg, size } = singleApp;

    return (
        <div className='flex justify-between items-center p-4 bg-white my-10'>
            <div className='flex gap-4'>
                <figure className="w-20 h-24">
                    <img src={image} className='w-full h-full object-contain' />
                </figure>

                <div>
                    <h3>{title}</h3>
                    <p className='flex gap-5'>
                       <img src={downloadIconImage} width={20} height={20}/> {downloads} <img src={ratingIcon} width={20} height={20}/> {ratingAvg}  {size} MB
                    </p>
                </div>
            </div>

            <button onClick={() => onUninstall(id)} className="btn btn-error"> Uninstall</button>
        </div>
    );
};

export default InstalledApps;