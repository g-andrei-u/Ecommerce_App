import React, { useState } from 'react';
import Heading from '../../Common/Heading';
import ProductItem from '../Product/ProductItem';
import { topProducts } from '../../Assets/Data/Data';

export default function TopProduct() {

    const [data, setData] = useState(topProducts);
    const [categories, setCategories] = useState('Phones');


    return (
        <section style={{marginTop: '40px', marginBottom: '20px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{marginLeft: '40px'}}>
                    <Heading title='Top Selling Products' description='The Most Sold Items on Our Site' />
                </div>
                <div style={{marginRight: '40px'}}>
                    <button style={{border: '0px', cursor: 'pointer'}}>{categories}</button>
                </div>
            </div>
            <ProductItem data={data} />
        </section>
    )
}