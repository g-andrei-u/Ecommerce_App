import React, { useState } from "react";
import { BiSearch } from 'react-icons/bi';
import '../../../Style/Hero.css';
import SearchItems from "./SearchItems";
import { products } from "../../Assets/Data/Data";


export default function Hero() {

    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSearch = (key) => {
        setValue(key);
        console.log('search', key);
    };


    return (
    <>
        <section className="hero">
            <div className="inner-hero" >
                <h1>
                    <label style={{ color: 'rgba(179, 0, 0, 1)' }}>Over </label><span>500</span><label style={{color: 'rgb(255, 157, 0)'}}> Products</label>
                    <br/>
                    <label>PCs, </label><label style={{ color: 'rgba(179, 0, 0, 1)' }}>Laptops</label>, and <label style={{color: 'rgb(255, 157, 0)'}}>more</label>
                </h1>
                <p style={{ color: 'rgba(0, 0, 0, 0.5)', fontWeight: '600', marginBottom: '50px'}}>The best quality in technology</p>
                <div className="search-bar">
                    <span>All Categories</span>
                    <input type="text" placeholder="Search Products..." onChange={onChange} value={value} />
                    <button onClick={() => onSearch(value)} ><BiSearch /></button>
                </div>
                <SearchItems product={products} value={value} onSearch={onSearch} />
            </div>
        </section>
    </>
    )
};