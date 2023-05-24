import React from 'react';
import { hero } from '../../Assets/Data/Data';
import '../../../Style/Card.css';


export default function Card() {
    return (
    <>
        <section className='items'>
            {hero.map((item) => (
                <div className='item' key={item.id}>
                    <div>
                        <img src={item.cover} />
                    </div>
                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.items} items</p>
                    </div>
                </div>
            ))}
        </section>
    </>
    )
};