import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Products.jsx'
import Home from './Home.jsx'
import PageNotFound from './PageNotFound.jsx'

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/products/*" element={<Products />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;