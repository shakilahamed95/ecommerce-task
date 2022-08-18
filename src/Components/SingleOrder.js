import React from 'react';

const SingleOrder = ({ singleOrder }) => {
    console.log(singleOrder);
    return (
        <tr>
            <th scope="row">{singleOrder.order_id}</th>
            <td>{singleOrder.product_id}</td>
            <td>{singleOrder.user_id}</td>
            <td>{singleOrder.quantity}</td>
            <td>{singleOrder.order_date}</td>
        </tr>
    );
};

export default SingleOrder;