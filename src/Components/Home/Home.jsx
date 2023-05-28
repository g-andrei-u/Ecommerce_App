import React from 'react';
import Hero from './Hero/Hero';
import Card from './Hero/Card';
import '../../Style/Home.css';
import Product from './Product/Product';
import Banner from './Banner/Banner';
import TopProduct from './TopProduct/TopProduct';
import Price from './Price/Price';
import Review from './Review/Review';

export default function Home() {
    return (
        <div className='home'>
            <Hero />
            <Card />
            <Product />
            <Banner />
            <TopProduct />
            <Price />
            <Review />
        </div>
    )
};