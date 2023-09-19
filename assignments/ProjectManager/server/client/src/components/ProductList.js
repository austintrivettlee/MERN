import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const [products, setProducts] = useState(props.products);

    const handleDelete = (deleteId) => {
        axios
            .delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(() => {
                removeFromDom(deleteId);
            })
            .catch((err) => console.log(err));
    };

    const removeFromDom = (deleteId) => {
        const filteredList = products.filter(
            (eachProduct) => eachProduct._id !== deleteId
        );
        setProducts(filteredList);
    };

    return (
        <div>
            {products.map((product, i) => (
                <fieldset key={i}>
                    <p>
                        {product.title}
                        <Link to={`/api/products/${product._id}`}>
                            {' '}
                            <button>view</button>
                        </Link>
                        <Link to={`/api/products/${product._id}/edit`}>
                            {' '}
                            <button>edit</button>
                        </Link>{' '}
                        <button onClick={() => handleDelete(product._id)}>delete</button>
                    </p>
                </fieldset>
            ))}
        </div>
    );
};

export default ProductList;
