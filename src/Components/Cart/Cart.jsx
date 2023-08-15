import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from "../Products/Product.module.scss";
import {remove} from "../../store/cartSlice";

const Cart = () => {
    const  products = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const removeToCart = (id) => {
        dispatch(remove(id));
    }

    const cards = products.map(product => (

        <div key={product.id} className={style.Card}>
            <img className={style.cardImage} src={product.img} alt="Sun Glasses"/>
            <h5>{product.title}</h5>
            {/*<h5>{product.description}</h5>*/}

            <div className={style.cardBottom}>
                <div className={style.cardPrice}>
                    <span>Price: </span>
                    <b>{product.price}</b>
                </div>
                <button className={style.addBtn} onClick={() => removeToCart(product.id)}  >
                    Remove
                </button>
                <button className={style.addBtn} >
                    Buy
                </button>
            </div>
        </div>
    ))

    return (
        <div className={style.cart}>
            {cards}
        </div>
    );
};

export default Cart;