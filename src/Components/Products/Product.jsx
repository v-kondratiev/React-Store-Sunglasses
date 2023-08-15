import { useEffect} from 'react';
import style from './Product.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {add} from "../../store/cartSlice";
import {getProducts} from "../../store/productSlice";
import StatusCode from "../../utils/StatusCode";
import {Spinner} from "react-bootstrap";

const Product = () => {
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
        <div className={style.product}>
            <h1> All Product</h1>
            <div className={style.items}>
                {cards}
            </div>
        </div>
    )
}

export default Product;