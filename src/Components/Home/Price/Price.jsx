import React from "react";
import Heading from "../../Common/Heading";
import { price } from "../../Assets/Data/Data";
import '../../../Style/Price.css';


export default function Price() {
    return (
        <section className="prices">
            <Heading title='Choose Any Plan You Like' description='Join The Cheapest Ecommerce Site' />

            <div className="prices-box">
                {price.map((item) => (
                    <div className="price">
                        <h3>{item.name}</h3>
                        <h1>
                            <span>€</span>
                            {item.price}
                            <label>/user per month</label>
                        </h1>
                        <p>{item.desc}</p>
                        <button>GET STARTED</button>
                        <ul className="list">
                            {item.list.map((lists) => (
                                <li>
                                    <i>{lists.icon}</i>
                                    <span>{lists.para}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}