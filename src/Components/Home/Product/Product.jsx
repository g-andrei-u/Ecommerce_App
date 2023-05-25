import React, { useState } from "react";
import Heading from "../../Common/Heading";
import ProductItem from "./ProductItem";
import { products } from "../../Assets/Data/Data";


export default function Product() {

    const [data, setData] = useState(products);

    return (
    <>
        <section className="product">
            <Heading title='Trending Now' description='Check out our hottest items' />
            <ProductItem data={data}/>
        </section>
    </>
    )
};