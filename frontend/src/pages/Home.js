import React from 'react'


import Product from '../Components/Product';
import data from '../data';


export default function Home() {
    return (
        <div>
            <div className="row center">
                {data.products.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
      </div>
    );
}
