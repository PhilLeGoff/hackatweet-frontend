import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Trends() {
    const trends = useSelector(state => state.trend.value)
    // console.log('trends', trends)

    const allTrends = trends.map((data, i) => {
        return (<div>
            <p>{data.trend}</p>
            <p>{data.number}</p>
        </div>)
    })
    return (<div>{allTrends}</div>)
}