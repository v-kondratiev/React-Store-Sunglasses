import React, {useEffect, useState} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../store/productSlice";
import StatusCode from "../../utils/StatusCode";
import {Spinner} from "react-bootstrap";
import {add} from "../../store/cartSlice";
import style from "../Products/Product.module.scss";



const CarouselHome = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    if (status === StatusCode.LOADING){
        return (
            <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }
    if(status === StatusCode.ERROR) {
        return <p>Something went wrong! Try again later</p>
    }

    const addToCart = (product) => {
        dispatch(add(product))
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
                <button className={style.addBtn} onClick={() => addToCart(product)}>
                    BUY NOW
                </button>
            </div>
        </div>
    ))




    return (
        <div className={style.Carousel}>
            <Carousel responsive={responsive}>
                {cards}
            </Carousel>;
        </div>
    );
};

export default CarouselHome;