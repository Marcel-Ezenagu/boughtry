import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import Product from '../Components/Product';


export default function Home() {
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;
 

    return (
        <div>
            {loading ? <LoadingBox />
                : error ? <MessageBox variant='danger'>{error}</MessageBox>
                    : 
                    <div className="row center">
                    {products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
    
            }
            
                  </div>
    );
}
