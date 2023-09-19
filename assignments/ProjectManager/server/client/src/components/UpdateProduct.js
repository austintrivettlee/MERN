import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct= () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");
   
    const { id } = useParams();

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/products/${id}`)
        .then(response => {
            const oneProduct = response.data;
            setTitle(oneProduct.title);
            setPrice(oneProduct.price)
            setDesc(oneProduct.desc)
        })
        .catch(err => console.error(err));
    }, [id]);

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            desc
        })
            .then(response =>{
                console.log(response);
                window.location = '/';})
            .catch(err=>console.log(err))
    }


return (
    <>
    <form onSubmit={onSubmitHandler}>
        <p>
            <label>Title</label><br />
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        </p>
        <p>
            <label>Price</label><br />
            <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
        </p>
        <p>
            <label>Description</label><br />
            <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} />
        </p>
        <input type="submit" />
    </form>
    <Link to={`/`}>Home</Link>
    </>
)
}

export default UpdateProduct;
