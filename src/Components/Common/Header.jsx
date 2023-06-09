import React, { useEffect, useState } from 'react';
import '../../Style/Header.css';
import CartImage from '../Assets/Images/carts.png';
import { navlist } from '../Assets/Data/Data';
import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineDelete, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { connect, useDispatch, useSelector } from 'react-redux';
import { DELETE } from '../../Controller/reducer';

export default function Header() {

    const [cartList, setCartList] = useState(false);
    const [menu, setMenu] = useState(false);
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();


    const total = () => {
        let price = 0;
        getData.map((e, i) => {
            price = parseFloat(e.price) * e.qty + price
        })
        setPrice(price)
    };

    useEffect(() => {total()}, [total]);

    const handleClose = () => {
        setCartList(null)
    };

    const deleteItem = (id) => {
        dispatch(DELETE(id))
    }
    const getData = useSelector((state) => state.cartReducer.carts);
    console.log(getData);


    return (
    <>
        <header className='header'>
            <nav>
                <div className='hamburgher'>
                    <button onClick={() => menu ? setMenu(false) : setMenu(true)} >
                        <AiOutlineMenu />
                    </button>
                    <div className={menu ? 'open-nav': 'close-nav'}>
                        <ul>{navlist.map(nav => 
                            <li key={nav.id}>
                                <Link to={nav.path}>{nav.text.toUpperCase()}</Link>
                            </li>
                        )}</ul>
                    </div>
                </div>

                <div className='logo'>
                    <Link to={'/'}>
                        <h1 style={{ color: 'rgba(179, 0, 0, 1)'}}>VALUE.</h1><h1>ON</h1><h1 style={{ color: 'rgb(255, 157, 0)'}}>DEMAND</h1>
                    </Link>
                </div>

                <div className='list'>
                    <ul>{navlist.map(nav => 
                        <li key={nav.id}>
                            <Link to={nav.path}>{nav.text.toUpperCase()}</Link>
                        </li>
                    )}</ul>
                </div>
            </nav>

            <div className='search-header' >
                <div className='search-header-bar'>
                    <input type='text' placeholder='Search Produts...' />
                    <BiSearch className='search-icon' />
                </div>
                <RiUser3Line className='profile-icon' />
                <AiOutlineHeart className='heart-icon' />
                <button onClick={() => setCartList(!cartList)}>
                    <BsBagCheck className='bag-icon' />
                    <p>MY CART({getData.length})</p>
                </button>
            </div>

            <div className={cartList ? 'show-cart' : 'hide-cart'}>
            {getData.length ? (
                <section className='full'>
                    <div className='full-up'>
                        <h4>Photo</h4>
                        <p>Product name</p>
                    </div>

                    {getData.map((e) => (
                        <div className='full-down'>
                            <div className='link'>
                                <Link to={`/cart/${e.id}`} onClick={handleClose}>
                                    <img src={e.cover}  />
                                </Link>
                            </div>
                            <div className='desc'>
                                <p>{e.title.slice(0, 20)}...</p>
                                <p>Price:  €{e.price}</p>
                                <p>Quantity: {e.qty}</p>
                            </div>
                            <i onClick={() => deleteItem(e.id)}>
                                <AiOutlineDelete />
                            </i>
                        </div>
                    ))}
                    <div>
                        <h4>Total : €{price}</h4>
                    </div>
                </section>
            ) : (
                <section className='empty'>
                    <p>Your Cart is Empty</p>
                    <img src={CartImage} />
                </section>
            )}
        </div>
        </header>
    </>
    )
};


const mapStateToProps = (state) => {
    return {
        amount : state.amount
    }
} 
connect(mapStateToProps)(Header)