import React, {useEffect, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './Home.module.scss';
import {NavLink} from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import CarouselHome from "../Carousel/Carousel";
const Home = () => {

    return (
        <div className={style.Home}>
            <div className={style.container}>
                <div className={style.info_group}>
                    <h1>Welcome </h1>
                    <div >
                        <NavLink  to="/Items">
                            Shop Sunglasses
                        </NavLink>
                    </div>
                </div>
                <CarouselHome/>
            </div>
        </div>

    )
};

export default Home;
