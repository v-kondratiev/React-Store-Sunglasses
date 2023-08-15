import React, {useEffect, useState} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "../Products/Product.module.scss";
import Product from "../Products/Product";


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

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://648d66c52de8d0ea11e7cda6.mockapi.io/Items')
            .then((res) => {
                return res.json();
            }).then(json => {
            setProducts(json)
        });
    }, []);

    return (
        <div className={style.Carousel}>
            <Carousel responsive={responsive}>
                <section className={style.products}>
                    <div className={style.product}>
                        {
                            products.map(card =>
                                <Product
                                    key={card.id}
                                    img={card.img}
                                    title={card.title}
                                    price={card.price}
                                    description={card.description}/>)
                        }
                    </div>
                </section>
            </Carousel>;
        </div>
    );
};

export default CarouselHome;