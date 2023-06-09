import React, { useState } from "react";
import '../../../Style/ProductItem.css';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';



export default function SearchItems({ product, value, onSearch }) {

    const [hoverId, setHoverId] = useState(null);
    const [openImage, setOpenImage] = useState(false);
    const [img, setImg] = useState('');


    const onEnter = (id) => { if(hoverId !== id) {setHoverId(id)}};
    const onLeave = () => {setHoverId(null)};
    const onOpenImage = (src) => { setImg(src); setOpenImage(true) };

    return (
    <>
        <section>
            <div className="products">
                {product.filter((items) => {
                    const searchkey = value.toLowerCase();
                    const title = items.title.toLowerCase();

                    return searchkey && title.startsWith(searchkey) && title !== searchkey
                })
                .slice(0,10)
                .map((items) => (
                    <div 
                    onMouseEnter={() => onEnter(items.id)} 
                    onMouseLeave={onLeave} 
                    className="product" 
                    key={items.id}
                    >
                    <div className="product-box">
                        <img src={items.cover} />
                        <div style={{display: hoverId === items.id ? 'block' : 'none'}} className='overlay bag'>
                            <button>
                                <FiShoppingBag />
                            </button>
                        </div>
                        <div style={{display: hoverId === items.id ? 'block' : 'none'}} className='overlay heart'>
                            <button>
                                <AiOutlineHeart />
                            </button>
                        </div>
                        <div style={{display: hoverId === items.id ? 'block' : 'none'}} className='overlay search'>
                            <button onClick={() => onOpenImage(items.cover)} >
                                <FiSearch />
                            </button>
                        </div>
                    </div>
                    <div>
                        <h3>{items.title}</h3>
                        <p>{items.author}</p>
                        <h4>Price: {items.price}</h4>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    </>
    )
};