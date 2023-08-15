import React, {useEffect, useState} from 'react';
import style from './Card.module.scss'
import {add} from "../../store/cartSlice";
import {useDispatch} from "react-redux";

import {useParams} from "react-router-dom";
import {getProducts} from "../../store/productSlice";


const Card = () => {
    let [product, setProduct] = useState([])
    let {productId} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const addToCart = (product) => {
        dispatch(add(product))
    }
    return (
        <div className={style.Card}>
            <div className={style.favorite} >
                <img  alt=""/>
            </div>

            <img className={style.cardImage} src={product.img} alt="Sun Glasses"/>
            <h5>{product.title}</h5>
            {/*<h5>{props.description}</h5>*/}

            <div className={style.cardBottom}>
                <div className={style.cardPrice}>
                    <span>Price: </span>
                    <b>{product.price}</b>
                </div>
                <button className={style.addBtn} onClick={()=> addToCart(product)} >
                    <img className={style.plus}  alt="Plus" />
                </button>
            </div>
        </div>
    );
};

export default Card;