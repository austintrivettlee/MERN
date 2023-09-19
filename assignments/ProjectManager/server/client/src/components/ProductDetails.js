import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(err => console.error(err));
    }, [id]);

const deleteProduct = (deleteId) => {
    axios
        .delete(`http://localhost:8000/api/products/${id}`)
        .then(response => {
            console.log("Product Deleted:", response);
            window.location = '/';
        })
        .catch((err) => console.log(err))
};



    const { title, price, desc } = product;
    return (
        <div>
            <fieldset>
                <h1>{title}</h1>
                <p>Price: ${price}</p>
                <p>Description: {desc}</p>
            </fieldset>
            <Link to={`/`}>Home</Link>
            <form onSubmit={(e) => { e.preventDefault(); deleteProduct(id); }}>
                <button type='submit'>delete</button>
            </form>
        </div>
    )
}
    
export default ProductDetails;





