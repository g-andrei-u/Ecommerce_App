import React from "react";
import { BiSearch} from 'react-icons/bi';
import '../../../Style/Hero.css';

export default function Hero() {
    return (
    <>
        <section className="hero">
            <div className="inner-hero" >
                <h1>
                    <label>Over <span style={{ color: 'rgba(179, 0, 0, 1)' }}>500</span> Products</label>
                    <br/>
                    <label style={{ color: 'rgba(179, 0, 0, 1)' }}>PCs</label><label>, Laptops, and more</label>
                </h1>
                <p style={{ color: 'rgba(0, 0, 0, 0.5)', fontWeight: '600'}}>The best quality in technology</p>
                <div className="search-bar">
                    <span>All Categories</span>
                    <input type="text" placeholder="Search Products..." />
                    <button><BiSearch /></button>
                </div>
            </div>
        </section>
    </>
    )
};