import React from 'react';
import '../../../Style/Banner.css';
import { banner } from '../../Assets/Data/Data';


export default function Banner() {
    return (
        <section>
            <div className='banners'>
                {banner.map((items) => (
                    <div className='banner' key={items.id}>
                        <div className='banner-cover'>
                            <img src={items.cover} />
                        </div>
                        <div className='over-cover'>
                            <h2>{items.title1}</h2>
                            <h2>{items.title2}</h2>
                            <p>{items.desc}</p>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};