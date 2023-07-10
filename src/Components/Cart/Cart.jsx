import React from 'react';
import {useSelector} from "react-redux";


const Cart = () => {
    const productCart = useSelector(state => state.cart);
    return (
        <div>
            <h1>CART</h1>
            {JSON.stringify(productCart)}
        </div>
    );
};

export default Cart;