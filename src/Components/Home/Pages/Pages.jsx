import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from '../../Common/Footer';
import Header from '../../Common/Header';
import Home from '../Home';
import Details from '../Details/Details';


export default function Pages() {
    return (
    <>
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/cart/:id' element={<Details />} />
            </Routes>
            <Footer />
        </Router>
    </>
    )
};