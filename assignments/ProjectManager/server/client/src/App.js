import React from 'react';
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
import UpdateProduct from './components/UpdateProduct'
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/api/products/:id" element={<ProductDetails/>} />
          <Route path="/api/products/:id/edit" element={<UpdateProduct/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;