import React, { useState } from 'react';
import '../../Style/Header.css';
import CartImage from '../Assets/Images/carts.png';
import { navlist } from '../Assets/Data/Data';
import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineClose, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { connect, useDispatch, useSelector } from 'react-redux';

export default function Header() {

    const [mobile, setMobile] = useState(false);
    const [cartList, setCartList] = useState(false);


    const handleClose = () => {
        setCartList(null)
    };

    const getData = useSelector((state) => state.cartReducer.carts);
    console.log(getData);

    window.addEventListener('scroll', function() {
        const header = this.document.querySelector('.header');
        header.classList.toggle('active', this.window.scrollY > 100)
    })


    return (
    <>
        <header className='header'>
            <nav>
                <div style={{display: 'none'}}>
                    <button onClick={() => setMobile(!mobile)}>
                        {mobile ? <AiOutlineMenu className='close' /> : <AiOutlineClose className='open' />}
                    </button>
                </div>
                <div style={{display:'flex', marginLeft: '8px'}}>
                    <h1 style={{ color: 'rgba(179, 0, 0, 1)'}}>VALUE.</h1><h1>ON</h1><h1 style={{ color: 'rgb(255, 157, 0)'}}>DEMAND</h1>
                </div>
                <div>
                    <ul>{navlist.map(nav => 
                        <li key={nav.id}>
                            <Link to={nav.path}>{nav.text.toUpperCase()}</Link>
                        </li>
                    )}</ul>
                </div>
            </nav>
            <div className='search-header' >
                <div style={{display: 'flex', alignItems: 'center'}}>
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
                            <Link to={`/cart/${e.id}`} onClick={handleClose}>
                                <img src={e.cover}  />
                            </Link>
                            <div>
                                <p>{e.title.slice(0, 20)}...</p>
                                <p>Price: {e.price}</p>
                                <p>Quantity: {e.qty}</p>
                            </div>
                        </div>
                    ))}
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