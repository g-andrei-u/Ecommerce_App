import React from "react";
import Heading from "../../Common/Heading";
import { customer } from "../../Assets/Data/Data";
import { ImQuotesRight } from 'react-icons/im';
import '../../../Style/Review.css';


export default function Review() {
    return (
        <section>
            <Heading title='Our Happy Customers' description='Check out what are the people saying'/>
            <div className="reviews">
                {customer.map((items) => (
                    <div className="review">
                        <button>
                            <ImQuotesRight />
                        </button>
                        <p>"{items.desc}"</p>
                        <h3>{items.name}</h3>
                        <span>{items.post}</span>
                    </div>
                ))}
            </div>
        </section>
    )
};