import React from 'react';
import '../../Style/Header.css';
import { navlist } from '../Assets/Data/Data';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <>
        <header>
            <nav>
                <div style={{display: 'none'}}>
                    <button>menu</button>
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
            <div>
                <input type='text' placeholder='Search Produts...' />
            </div>
        </header>
    </>
    )
};