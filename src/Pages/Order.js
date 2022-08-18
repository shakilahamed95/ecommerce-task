import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Order = () => {
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://assessment.api.vweb.app/orders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div className='container'>
            <div className='d-flex align-items-center justify-content-center col-12 col-sm-12 col-md-12 col-lg-12 mt-4 p-5'>
                <div>
                    <h4 className='header text-center text-primary'>Our Daily Sell (August-16)</h4>
                    <LineChart width={1000} height={500} data={order.slice(0, 20)} >
                        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                        <XAxis dataKey='order_id' ></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend verticalAlign="bottom" height={36}></Legend>
                        <Line name='Order-Id' type="monotone" dataKey="quantity" stroke="#8884d8" />
                    </LineChart>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center col-12 col-sm-12 col-md-12 col-lg-12 mt-2 p-5'>
                <div>
                    <h4 className='header text-center text-primary'>Our Daily Sell (August-17)</h4>
                    <AreaChart width={1000} height={500} data={order.slice(20, 40)}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="order_id" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                        <Area type="monotone" dataKey="quantity" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center col-12 col-sm-12 col-md-12 col-lg-12 mt-2 p-5'>
                <div>
                    <h4 className='header text-center text-primary'>Our Daily Sell (August-18)</h4>
                    <BarChart width={1000} height={500} data={order.slice(40, 60)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="order_id" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="quantity" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Order;