import React from 'react';
import { Link } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import starIcon from '../../assets/icon-ratings.png'

const AppCard = ({ singleApp }) => {
    const { id, title, image, downloads, ratingAvg } = singleApp;
    return (
        <Link to={`/appDetails/${id}`}>
            <div className="card card-sm bg-white border-b-amber-50 shadow-lg p-5">
                <div className="bg-gray-300 flex justify-center items-center h-48">
                    <figure className="w-40 h-44">
                        <img src={image} className='w-full h-full object-contain' />
                    </figure>
                </div>
                <p class="card-title">{title}</p>

                <div className='flex justify-between'>
                    <p class="flex text-sm gap-2 bg-gray-200 text-green-400"> <img src={downloadIcon} width={20} height={20} />  {downloads}</p>
                    <p class="flex text-sm gap-2 bg-amber-100 text-amber-700"> <img src={starIcon} width={20} height={20} /> {ratingAvg}</p>
                </div>

            </div>

        </Link>
    );
};

export default AppCard;