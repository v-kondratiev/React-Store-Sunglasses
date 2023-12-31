import React, {useEffect, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './Home.module.scss';
import {NavLink} from "react-router-dom";
import sunglass from './../../assets/homepage.png'
import CarouselHome from "../Carousel/Carousel";

const Home = () => {

    return (
        <div className={style.Home}>
            <img src={sunglass} alt=""/>
            <div className={style.info_group}>
                <h1>Welcome </h1>
                <div>
                    <NavLink  to="/Items">
                        <button className={style.info_btn}>
                            Shop sunglasses
                        </button>
                    </NavLink>
                </div>
            </div>



            <div className={style.container}>
                <div className={style.title}>All Products</div>
                <CarouselHome/>
            </div>
        </div>

    )
};

export default Home;
