import {useState, useEffect} from 'react';
import * as React from 'react';
import style from './Product.module.scss'
import {useDispatch} from "react-redux";
import {add} from "../../store/cartSlice";


const Product = () => {

    const dispatch = useDispatch();

    const [products, getProducts] = useState([]);
    useEffect(() => {
        fetch('https://648d66c52de8d0ea11e7cda6.mockapi.io/Items')
            .then(data => data.json())
            .then(result => getProducts(result))

    }, []);

    const addToCart = (product) => {
        dispatch(add(product))

    }

    const cards =products.map(product => (

        <div key={product.id} className={style.Card}>
            <img className={style.cardImage} src={product.img} alt="Sun Glasses"/>
            <h5>{product.title}</h5>
            {/*<h5>{product.description}</h5>*/}

            <div className={style.cardBottom}>
                <div className={style.cardPrice}>
                    <span>Price: </span>
                    <b>{product.price}</b>
                </div>
                <button className={style.addBtn} onClick={() =>addToCart(product)} >
                    BUY NOW
                </button>
            </div>
        </div>
    ))


    return (
        <div className={style.product}>
            <h1> All Product</h1>
            <div className={style.items}>
                {cards}
            </div>
        </div>
    )
}

export default Product;