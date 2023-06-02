import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../Style/Details.css';
import { useParams, useNavigate } from 'react-router-dom';
import { MdStarRate } from 'react-icons/md';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { ADD, DELETE, REMOVE_INT } from '../../../Controller/reducer';

export default function Details () {

    const [data, setData] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const getData = useSelector((state) => state.cartReducer.carts);

    const increment = (e) => {
        dispatch(ADD(e))
    }
    const decrement = (item) => {
        dispatch(REMOVE_INT(item))
    }
    const deletes = (id) => {
        dispatch(DELETE(id))
        navigate.push('/')
    }

    const compare = () => {

        let compareData = getData.filter((e) => {
            return e.id.toString() === id
        })
        setData(compareData)
    };

    useEffect(() => {
        compare()
    }, [id]);

    return (
        <article>
            <section>
                <h2>Product Details pages</h2>
                {data.map((item) => (
                    <div className='item-desc'>
                        <img src={item.cover} alt="Product Cover" />
                        <div className='just-desc'>
                            <h1>{item.title}</h1>
                            <div style={{color: 'rgb(255, 157, 0)', marginBottom: '20px'}}>
                                <MdStarRate />
                                <MdStarRate />
                                <MdStarRate />
                                <MdStarRate />
                                <MdStarRate />
                            </div>
                            <h3>€{item.price * item.qty}</h3>
                            <p>{item.author}</p>
                            <div className='increment'>
                                <button onClick={() => increment(item)}>
                                    <AiOutlinePlus />
                                </button>
                                <span>{item.qty}</span>
                                <button onClick={ item.qty < 1 ? () => deletes(item.id) : () => decrement(item) }>
                                    <AiOutlineMinus />
                                </button>
                            </div>
                            <button className='add'>Add To Cart</button>
                            <div>
                                <h4>PRODUCTION DESCRIPTION</h4>
                                <p>Deqignedinner bwyn Puitdzgk ien 1129 s st ne ocf thae fhils modesfels creadated especqawly farkor paolael Harstn & yyn, and proced snca. Ae lafdst of a serWes of chaandrs wegtner desWgned basded on in Wration from antybue chWneWe armamrs.</p>
                                <h4> PRODUCT DETAILS</h4>
                                <ul style={{display: 'flex', flexDirection: 'column'}}>
                                    <li>
                                        <p>Materials: Metal, Wood</p>
                                    </li>
                                    <li>
                                        <p>Arms: Metal and white wood</p>
                                    </li>
                                    <li>
                                        <p>Width: 52 cm</p>
                                    </li>
                                    <li>
                                        <p>Height: 44 cm</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </article>
    )
};