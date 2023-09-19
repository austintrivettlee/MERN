import React from 'react';
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const emptyProduct = {
    title: "",
    price: 0,
    desc: ""
  } 
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/api/product/:id" element={<ProductDetails product={emptyProduct}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;