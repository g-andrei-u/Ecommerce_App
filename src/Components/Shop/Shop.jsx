import React, { useState } from "react";
import Heading from "../Common/Heading";
import ProductItem from "../Home/Product/ProductItem";
import { allProducts } from "../Assets/Data/Data";
import '../../Style/Shop.css';


export default function Shop() {

    const [data, setData] = useState(allProducts);

    return (
    <>
        <section className="shop">
            <Heading title='What do you like?' description='Pick the best for you!' />
            <ProductItem data={data}/>
        </section>
    </>
    )
};