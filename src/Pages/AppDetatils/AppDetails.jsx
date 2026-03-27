import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import ReviewChart from '../ReviewChart/ReviewChart';

const AppDetails = () => {
    const { id } = useParams()
    // console.log(id);
    const appId = parseInt(id)
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appId)
    const { image, title, companyName, downloads, ratingAvg, reviews, ratings, description, size } = singleApp
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm p-5">
                <figure className="w-40 h-44">
                    <img src={image} className='w-full h-full object-contain' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{companyName}</p>
                    <div className='flex gap-7'>
                        <div>
                            <img src={downloadIcon} height={20} width={20} />
                            <p>Downloads</p>
                            <h1 className='text-5xl font-black'>{downloads}</h1>
                        </div>
                        <div>
                            <img src={ratingIcon} height={20} width={20} />
                            <p>Average Ratings</p>
                            <h1 className='text-5xl font-black'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <img src={reviewIcon} width={20} height={20} />
                            <p>Total Review</p>
                            <h1 className='text-5xl font-black'>{reviews}</h1>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Install Now ({size} MB)</button>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-2xl'>Rating</h3>
                <ReviewChart ratings={ratings}></ReviewChart>
                
            </div>
            <div>
                {description}
            </div>
        </div>
    );
};

export default AppDetails;