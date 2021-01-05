import React, { useEffect } from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Register from './screens/Register';
import SignIn from './screens/SignIn';
import Footer from './Components/Footer';
import Home from './pages/Home';
import ProductScreen from './pages/ProductScreen';



function App() {
  

  return (
    <Router>
      
    <div className="=grid-container">
      <Header />
        <main>
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/' component={Home} exact />

        
        
        </main>
      <Footer/>
    </div>
      
  </Router>
  );
}

export default App
