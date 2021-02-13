import React, { useEffect } from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Register from './pages/Register';
import Footer from './Components/Footer';
import Home from './pages/Home';
import ProductScreen from './pages/ProductScreen';
import CartScreen from './pages/CartScreen';
import SigninScreen from './pages/SigninScreen';
import ShippingAddress from './pages/ShippingAddress';
import NewProduct from './pages/NewProduct';


import { useDispatch} from 'react-redux';
import { listProducts } from './actions/productActions';

function App() {
  

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listProducts());
  }, []);

  return (
    <Router>
      
    <div className="=grid-container">
      <Header />
        <main>
          
        <Route path='/shipping' component={ShippingAddress} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/createProduct' component={NewProduct} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/signin' component={SigninScreen} />
          <Route path= '/register' component={Register} />
          <Route path='/' component={Home} exact />
        </main>
      <Footer/>
    </div>
      
  </Router>
  );
}

export default App
