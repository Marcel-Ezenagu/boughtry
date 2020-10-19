import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment'

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';

import Orders from './Orders'


const promise = loadStripe('pk_test_51HVorEJgrTasCFsrzuyebuKsSb3XPHMPXd4AS34E0l6ghizWzE8T8pPvLUGx5Se6FTNUQbmxpVJ6XscuveX6by8O001cMAWus2')


function App() {
  const [{ user }, dispatch] = useStateValue()
  // to keep track of user
  useEffect(() => {
    // will only run once when the app components loads...

    auth.onAuthStateChanged(authUser => {
      console.log('this is the user', authUser)
      if (authUser) {
        // user's logged in or just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //Using BEM styling
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />

            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
