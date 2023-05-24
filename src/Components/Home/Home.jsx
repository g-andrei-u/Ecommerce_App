import React from 'react';
import Hero from './Hero/Hero';
import Card from './Hero/Card';
import '../../Style/Home.css';

export default function Home() {
    return (
        <div className='home'>
            <Hero />
            <Card />
        </div>
    )
};