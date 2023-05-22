import React, { useState } from 'react';
import '../../Style/Header.css';
import { navlist } from '../Assets/Data/Data';
import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineClose, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";

export default function Header() {

    const [mobile, setMobile] = useState(false);


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
                <div>
                    <h1>VALUE.ONDEMAND</h1>
                </div>
                <div>
                    <ul>{navlist.map(nav => 
                        <li key={nav.id}>
                            <Link to={nav.path}>{nav.text}</Link>
                        </li>
                    )}</ul>
                </div>
            </nav>
            <div className='search' >
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <input type='text' placeholder='Search Produts...' />
                    <BiSearch className='search-icon' />
                </div>
                <RiUser3Line className='profile-icon' />
                <AiOutlineHeart className='heart-icon' />
                <button>
                    <BsBagCheck className='bag-icon' />
                    <p>MY CART(0)</p>
                </button>
            </div>
        </header>
    </>
    )
};