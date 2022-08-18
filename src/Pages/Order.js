import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import SingleOrder from '../Components/SingleOrder';

const Order = () => {
    const [orders, setOrder] = useState([])
    useEffect(() => {
        fetch('https://assessment.api.vweb.app/orders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div className='container'>
            <div className='d-flex align-items-center justify-content-center col-12 col-sm-12 col-md-12 col-lg-12 mt-4 p-5'>
                <div>
                    <h3 className='header text-center text-primary'>Our Daily Sell (August-16)</h3>
                    <LineChart width={1000} height={500} data={orders.slice(0, 20)} >
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
                    <h3 className='header text-center text-primary'>Our Daily Sell (August-17)</h3>
                    <AreaChart width={1000} height={500} data={orders.slice(20, 40)}>
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
                    <h3 className='header text-center text-primary'>Our Daily Sell (August-18)</h3>
                    <BarChart width={1000} height={500} data={orders.slice(40, 60)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="order_id" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="quantity" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
            <div>
                <h3 className='text-primary text-center mb-5'>Total Sell In August 2022</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Order Id</th>
                            <th scope="col">Product Id</th>
                            <th scope="col">User Id</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.slice(0, 200).map(singleOrder => {

                                return (
                                    <SingleOrder
                                        key={singleOrder._id}
                                        singleOrder={singleOrder}
                                    ></SingleOrder>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;