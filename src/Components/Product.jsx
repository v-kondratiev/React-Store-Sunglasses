import {useState, useEffect} from 'react';

const Product = () => {

    const [product, getProducts] = useState([]);
    useEffect(() => {
        fetch('https://648d66c52de8d0ea11e7cda6.mockapi.io/products')
            .then(data => data.json())
            .then(result => getProducts(result))

    }, []);

    return (
        <div>
            <h1>Product</h1>

        </div>
    )
}

export default Product;