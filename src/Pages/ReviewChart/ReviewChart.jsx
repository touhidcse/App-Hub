import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const ReviewChart = ({ ratings}) => {

    const appChartRatingData = ratings.map((ratingData) => ({
        name: ratingData.name,
        count: ratingData.count,
    }));
//    console.log(appChartRatingData)
    return (
        <div>
            <BarChart width={1200} height={250} data={appChartRatingData} layout="vertical">
                <XAxis type="number" axisLine={false} tickLine={false} 
                />
                <YAxis dataKey="name" type="category" reversed axisLine={false} tickLine={false} />
                <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
        </div>
    );
};

export default ReviewChart;