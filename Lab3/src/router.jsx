import { Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "./Pages/Home/Home";
import Products from "./Pages/ProductsList/ProductsList";
import Product from './Pages/ProductDetails/ProductDetails';
import RegisterForm from "./Pages/Form/Form";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/register" element={<RegisterForm />} /> {/* Add the route for RegisterForm */}
        </Routes>
    )
}

export default Router;
