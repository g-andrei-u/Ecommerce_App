import React from 'react';
import Hero from './Hero/Hero';
import Card from './Hero/Card';
import '../../Style/Home.css';
import Product from './Product/Product';

export default function Home() {
    return (
        <div className='home'>
            <Hero />
            <Card />
            <Product />
        </div>
    )
};