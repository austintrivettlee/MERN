import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/product/${id}`)
        .then(response => setProduct(response.data))
        .catch(err => console.error(err));
    }, [id]);

    const { title, price, desc } = product;
    return (
        <div>
            <fieldset>
                <h1>{title}</h1>
                <p>Price: ${price}</p>
                <p>Description: {desc}</p>
            </fieldset>
        </div>
    )
}
    
export default ProductDetails;





