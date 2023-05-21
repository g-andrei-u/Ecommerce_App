import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from '../../Common/Footer';
import Header from '../../Common/Header';
import Home from '../Home';


export default function Pages() {
    return (
    <>
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    </>
    )
};