import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../actions/productActions';

export default function NewProduct(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');;
    const [countInStock, setCountInStock] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');

    const dispatch = useDispatch();

    const createHandler = (e) => {
        e.preventDefault();
        dispatch(createProduct(name, image, description, price, countInStock,category,brand))
        setName('');
        setImage('');
        setDescription('');
        setPrice('');
        setCountInStock('');
        setCategory('');
        setBrand('');
    }
/* 
    useEffect(() => {
          
        props.history.push('/');
        
    }, [props]) */

    return (
        <div>
            <form className='form' onSubmit={createHandler}>
                <div>
                    <h1>Add new Product</h1>

                </div>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        placeholder='Enter product name'
                        required
                        onChange={e => setName(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor='image'>Image</label>
                    <input
                        type='file'
                        id='image'
                        placeholder='Enter product image'
                        required
                        onChange={e => setImage(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor='description'>description</label>
                    <input
                        type='text'
                        id='description'
                        placeholder='Enter product description'
                        required
                        onChange={e => setDescription(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor='price'>price</label>
                    <input
                        type='number'
                        id='price'
                        placeholder='Enter product price'
                        required
                        onChange={e => setPrice(e.target.value)}
                    />
                      
                </div>
                <div>
                    <label htmlFor='countInStock'>countInStock</label>
                    <input
                        type='number'
                        id='countInStock'
                        placeholder="Enter product's countInStock"
                        required
                        onChange={e => setCountInStock(e.target.value)}
                        />
                                        
                    </div>
                    <div>
                    <label htmlFor='category'>category</label>
                    <input
                        type='text'
                        id='category'
                        placeholder='Enter product category'
                        required
                        onChange={e => setCategory(e.target.value)}
                        />
                        
                    </div>
                    <div>
                    <label htmlFor='brand'>brand</label>
                    <input
                        type='text'
                        id='brand'
                        placeholder='Enter product brand'
                        required
                        onChange={e => setBrand(e.target.value)}
                        />
                        
                </div>
                <div>
                    <button type='submit'>Add Product</button>
            </div>
            </form>
            
        </div>
    )
}
