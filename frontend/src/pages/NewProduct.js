import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../actions/productActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import instance from '../services/axios';

export default function NewProduct(props) {

   const [values, setValues] = useState({
        name: "",
        image: "",
        description: "",
        price: "",
        countInStock: "",
        category: '',
      brand:''
    })

    
    // const handleChange = name => event => {
    //     const value = name === "image"
    //         ? event.target.files[0]
    //         : event.target.value
    //     setValues({...values, [name]: value}) 
    // }

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');;
    const [countInStock, setCountInStock] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');

    // const productCreate = useSelector(state => state.productCreate)
    // const { loading, error, productInfo } = productCreate;
    // const dispatch = useDispatch();

     const createProductHandler = async (e) => {   
        e.preventDefault();
    //     dispatch(createProduct(name, image, description, price, countInStock, category, brand))
    //     setName('');
    //     setImage('');
    //     setDescription('');
    //     setPrice('');
    //     setCountInStock('');
    //     setCategory('');
    //     setBrand('');
    // }


//   let productData = new FormData()
//       values.name && productData.append('name', values.name)
//       values.image && productData.append('image', values.image)
//       values.description && productData.append('description', values.description)
//       values.price && productData.append('price', values.price)
//       values.countInStock && productData.append('countInStock', values.countInStock)
//       values.category && productData.append('category', values.category)
//       values.brand && productData.append('brand', values.brand)

      const productData = new FormData()
      productData.append('name', name)
      productData.append('description', description)
      productData.append('price', price)
      productData.append('countInStock', countInStock)
      productData.append('category', category)
      productData.append('brand', brand)  
      productData.append('image', image)

  
            const newProduct = await instance.post('/api/products', productData, {headers:{"content-type": 'multipart/form-data'}}).then(res => console.log(res)).catch(err => console.log(err));
            
        //   props.history.push('/')
      
    }  

 
    return (
        <div>
            <form className='form' encType="multipart/form-file" onSubmit={createProductHandler}  >
                    <div>
                        <h1>Add new Product</h1>

                    </div>
                    
                {loading ? <LoadingBox />
                    : error ? <MessageBox variant='danger'>{error}</MessageBox>
                        : (
                    
                <> 
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            placeholder='Enter product name'
                            required
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    
                    <div>
                        <label htmlFor='description'>description</label>
                        <input
                            type='text'
                            id='description'
                            
                            placeholder='Enter product description'
                            required
                            onChange={(e) => setDescription(e.target.value)}
                            />
                    </div>
                    <div>
                        <label htmlFor='price'>price</label>
                        <input
                            type='number'
                            id='price'
                            placeholder='Enter product price'
                            required
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        
                    </div>
                    <div>
                        <label htmlFor='countInStock'>countInStock</label>
                        <input
                            type='number'
                            id='countInStock'
                            placeholder="Enter product's countInStock"
                            required
                            onChange={(e) => setCountInStock(e.target.value)}
                            />
                                            
                        </div>
                        <div>
                        <label htmlFor='category'>category</label>
                        <input
                            type='text'
                            id='category'
                            placeholder='Enter product category'
                            required
                            onChange={(e) => setCategory(e.target.value)}
                            />
                            
                        </div>
                        <div>
                        <label htmlFor='brand'>brand</label>
                        <input
                            type='text'
                            id='brand'
                            placeholder='Enter product brand'
                            required
                            onChange={(e) => setBrand(e.target.value)}
                            />
                            
                                </div>
                                <div>
                        <label htmlFor='image'>Image</label>
                        <input
                            type='file'
                                        
                            id='image'
                            name='image'
                            accept=".png, .jpg, .jpeg"
                            placeholder='Enter product image'
                            required
                            onChange={(e) => setImage(e.target.files[0])}
                            />
                    </div>
                    <div>
                        <button  type='submit'>Add Product</button>
                </div>
            </>                 
                        )}
        </form>
            
        </div>
    )
}
