import React, { useEffect } from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Register from './screens/Register';
import SignIn from './screens/SignIn';
import Home from './screens/Home';

import beta from './data';

import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

function App() {
  

  return (
    <div className="=grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Ecom
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {beta.products.map(product => (
             <div key={product._id} className="card">
             <a href={`/product/${product._id}`}>
               <img className="medium" src={product.image} alt="product" />
             </a>
             <div className="card-body">
               <a href={`/product/${product._id}`}>
                 <h2>{product.name}</h2>
               </a>

                <div className="price">${product.price}</div>
             </div>
           </div>
         
          ))}
             
            
              
            </div>
      </main>
      <footer className="row center">All right reserved.</footer>
    </div>
  );
}

export default App
