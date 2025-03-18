import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Product from './Product.jsx'

const Products = ({ match }) => {
    return (
        <div className="page__content">
            <ul className="products">
                <li className="products__item">
                    <Link to='/products/First'>First</Link>
                </li>
                <li className="products__item">
                    <Link to='/products/Second'>Second</Link>
                </li>
                <li className="products__item">
                    <Link to='/products/Third'>Third</Link>
                </li>
            </ul>
            <Routes>
                <Route exact path="/" element={<span className="number-select">Select a number pls</span>} />
                <Route path="/:productId" element={<Product />} />
            </Routes>
        </div>
    );
};

export default Products;