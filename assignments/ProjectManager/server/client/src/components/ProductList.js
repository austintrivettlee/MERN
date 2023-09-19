import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
    
const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) =>
                <p key={i}><Link to={`/api/product/${product._id}`}>{product.title}</Link></p>
            )}
        </div>
    )
}
    
export default ProductList;

